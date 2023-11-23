using Api;
using Azure.Core;
using Azure.ResourceManager;
using Azure;
using Azure.Identity;
using Azure.ResourceManager.Resources;
using Google.Protobuf.Collections;
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

            if (!string.IsNullOrEmpty(request.Search))
            {
                d = d.Where(r => r.Name.Contains(request.Search, StringComparison.CurrentCultureIgnoreCase)).ToList();
            }

            if (!string.IsNullOrEmpty(request.SortField))
            {
                if (request.SortOrder == 1)
                {
                    d = request.SortField switch
                    {
                        "name" => d.OrderBy(r => r.Name).ToList(),
                        "location" => d.OrderBy(r => r.Location).ToList(),
                        _ => d
                    };
                }
                else
                {
                    d = request.SortField switch
                    {
                        "name" => d.OrderByDescending(r => r.Name).ToList(),
                        "location" => d.OrderByDescending(r => r.Location).ToList(),
                        _ => d
                    };
                }

            }

            var count = d.Count;

            d = d.Skip(request.Skip).Take(request.Take).ToList();
            return Task.FromResult(new GetResourceGroupsReply()
            {
                Data = {d},
                Total = count
            });
        }
    }
}