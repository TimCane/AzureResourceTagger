using Azure.ResourceManager.Resources;
using Azure.ResourceManager;
using Azure.Identity;
using Grpc.Core;
using Microsoft.Extensions.Caching.Memory;

namespace Api.Services
{
    public class ResourcesService : Resources.ResourcesBase
    {
        private readonly ILogger<ResourcesService> _logger;
        private readonly IMemoryCache _memoryCache;

        public ResourcesService(ILogger<ResourcesService> logger, IMemoryCache memoryCache)
        {
            _logger = logger;
            _memoryCache = memoryCache;
        }

        public override Task<GetResourcesReply> GetResources(GetResourcesRequest request, ServerCallContext context)
        {
            var data = GetResourcesFromAzure(request);

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
                        _ => data
                    };
                }
                else
                {
                    data = request.SortField switch
                    {
                        "name" => data.OrderByDescending(r => r.Name).ToList(),
                        _ => data
                    };
                }

            }

            var count = data.Count;

            data = data.Skip(request.Skip).Take(request.Take).ToList();
            return Task.FromResult(new GetResourcesReply()
            {
                Resources = { data },
                Total = count
            });
        }

        private List<Resource> GetResourcesFromAzure(GetResourcesRequest request)
        {
            if (!_memoryCache.TryGetValue<List<Resource>>($"resourceGroups.GetResourceGroup({request.Id})", out var d))
            {
                // First, initialize the ArmClient and get the default subscription
                ArmClient client = new ArmClient(new DefaultAzureCredential());

                // Now we get a ResourceGroupResource collection for that subscription
                SubscriptionResource subscription = client.GetDefaultSubscription();
                var resourceGroup = subscription.GetResourceGroup(request.Id);

                var aa = subscription.GetResourceProviders();

                var resources = resourceGroup.Value.GetGenericResources();
                
                d = resources.Select(group => new Resource()
                    {
                        Id = group.Data.Name.ToString(),
                        Name = group.Data.Name,
                        Type = new ResourceType()
                        {
                            Namespace = group.Data.ResourceType.Namespace.ToString(),
                            Type = group.Data.ResourceType.Type.ToString()
                        }
                    })
                    .ToList();

                _memoryCache.Set($"resourceGroups.GetResourceGroup({request.Id})", d);
            }

            return d;
        }
    }
}