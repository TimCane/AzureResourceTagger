using Azure.ResourceManager;
using Azure.Identity;
using Azure.ResourceManager.Resources;
using Grpc.Core;
using Microsoft.Extensions.Caching.Memory;

namespace Api.Services
{
    public class ResourceGroupsService : ResourceGroups.ResourceGroupsBase
    {
        private readonly ILogger<ResourceGroupsService> _logger;
        private readonly IMemoryCache _memoryCache;
        public ResourceGroupsService(ILogger<ResourceGroupsService> logger, IMemoryCache memoryCache)
        {
            _logger = logger;
            _memoryCache = memoryCache;
        }

        public override Task<GetResourceGroupsReply> GetResourceGroups(GetResourceGroupsRequest request, ServerCallContext context)
        {
            var data = GetResourceGroupsFromAzure();

            if (!string.IsNullOrEmpty(request.Search))
            {
                data = data.Where(r => r.Name.Contains(request.Search, StringComparison.CurrentCultureIgnoreCase)).ToList();
            }

            if (!string.IsNullOrEmpty(request.SortField))
            {
                if (request.SortOrder == 1)
                {
                    data = request.SortField switch
                    {
                        "name" => data.OrderBy(r => r.Name).ToList(),
                        "location" => data.OrderBy(r => r.Location).ToList(),
                        _ => data
                    };
                }
                else
                {
                    data = request.SortField switch
                    {
                        "name" => data.OrderByDescending(r => r.Name).ToList(),
                        "location" => data.OrderByDescending(r => r.Location).ToList(),
                        _ => data
                    };
                }

            }

            var count = data.Count;

            data = data.Skip(request.Skip).Take(request.Take).ToList();
            return Task.FromResult(new GetResourceGroupsReply()
            {
                Groups = { data },
                Total = count
            });
        }

        private List<ResourceGroup> GetResourceGroupsFromAzure()
        {
            if (!_memoryCache.TryGetValue<List<ResourceGroup>>("resourceGroups.GetAll()", out var d))
            {
                // First, initialize the ArmClient and get the default subscription
                ArmClient client = new ArmClient(new DefaultAzureCredential());

                // Now we get a ResourceGroupResource collection for that subscription
                SubscriptionResource subscription = client.GetDefaultSubscription();
                ResourceGroupCollection resourceGroups = subscription.GetResourceGroups();

                var groups = resourceGroups.GetAll();

                d = groups.Select(group => new ResourceGroup()
                    {
                        Id = group.Data.Name.ToString(),
                        Name = group.Data.Name ?? "",
                        Location = group.Data.Location.DisplayName ?? "",
                    })
                    .ToList();

                _memoryCache.Set("resourceGroups.GetAll()", d);
            }

            return d;
        }

        public override Task<GetResourceGroupReply> GetResourceGroup(
            GetResourceGroupRequest request,
            ServerCallContext context
        )
        {
            var data = GetResourceGroupsFromAzure();

            var group = data.FirstOrDefault(g => g.Id == request.Id);


            return Task.FromResult(new GetResourceGroupReply()
            {
                Group = group
            });
        }
    }
}