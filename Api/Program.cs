using Api.Services;

namespace Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Additional configuration is required to successfully run gRPC on macOS.
            // For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

            // Add services to the container.
            builder.Services.AddGrpc();

            builder.Services.AddMemoryCache();

            var policyName = "defaultCorsPolicy";
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(policyName, b =>
                {
                    b.WithOrigins("http://localhost:4200") // the Angular app url
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                });
            });

            var app = builder.Build();

            app.UseCors(policyName);
            app.UseGrpcWeb();

            // Configure the HTTP request pipeline.
            app.MapGrpcService<ResourcesService>().EnableGrpcWeb();
            app.MapGrpcService<ResourceGroupsService>().EnableGrpcWeb();
            app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

            app.Run();
        }
    }
}