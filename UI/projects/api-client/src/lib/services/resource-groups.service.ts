import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetResourceGroupReply,
  GetResourceGroupRequest,
  GetResourceGroupsReply,
  GetResourceGroupsRequest
} from '../generated/resource-group.pb';
import { ResourceGroupsClient } from '../generated/resource-group.pbsc';
import { PaginationFilter } from '../models/pagination-filter.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourceGroupsService {
  constructor(private client: ResourceGroupsClient) {}

  getResourceGroups(
    filter: PaginationFilter
  ): Observable<GetResourceGroupsReply> {
    let request = new GetResourceGroupsRequest({
      search: filter.search,
      skip: filter.skip,
      sortField: filter.sortField,
      sortOrder: filter.sortOrder,
      take: filter.take
    });

    return this.client.getResourceGroups(request);
  }

  getResourceGroup(id: string): Observable<GetResourceGroupReply> {
    let request = new GetResourceGroupRequest({
      id: id
    });

    return this.client.getResourceGroup(request);
  }
}
