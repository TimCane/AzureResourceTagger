using Api;
using Azure.Core;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager;
using Azure;
using Azure.Identity;
using Grpc.Core;

namespace Api.Services
{
    public class ResourcesService : Resources.ResourcesBase
    {
        private readonly ILogger<ResourcesService> _logger;
        public ResourcesService(ILogger<ResourcesService> logger)
        {
            _logger = logger;
        }

        public override Task<GetResourcesReply> GetResources(GetResourcesRequest request, ServerCallContext context)
        {
            // First, initialize the ArmClient and get the default subscription
            ArmClient client = new ArmClient(new DefaultAzureCredential());

            // Now we get a ResourceGroupResource collection for that subscription
            SubscriptionResource subscription = client.GetDefaultSubscription();
            var resourceGroup = subscription.GetResourceGroup(request.Id);

            var resources = resourceGroup.Value.GetGenericResources();
            
            return Task.FromResult(new GetResourcesReply
            {
                Data =
                {
                    new Resource()
                    {
                        Id = "11"
                    }
                },
                Total = 1
            });
        }
    }
}