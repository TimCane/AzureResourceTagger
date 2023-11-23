/*
 * Public API Surface of api-client
 */

export * from './lib/api-client.module';
export { ResourceGroup } from './lib/generated/resource-group.pb';
export { Resource } from './lib/generated/resource.pb';
export { PaginationFilter } from './lib/models/pagination-filter.interface';
export { ResourceGroupsService } from './lib/services/resource-groups.service';
export { ResourcesService } from './lib/services/resources.service';
