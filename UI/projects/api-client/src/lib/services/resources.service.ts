import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetResourcesReply,
  GetResourcesRequest
} from '../generated/resource.pb';
import { ResourcesClient } from '../generated/resource.pbsc';
import { PaginationFilter } from '../models/pagination-filter.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  constructor(private client: ResourcesClient) {}

  getResources(
    id: string,
    filter: PaginationFilter
  ): Observable<GetResourcesReply> {
    let request = new GetResourcesRequest({
      id: id,
      search: filter.search,
      skip: filter.skip,
      sortField: filter.sortField,
      sortOrder: filter.sortOrder,
      take: filter.take
    });

    return this.client.getResources(request);
  }
}
