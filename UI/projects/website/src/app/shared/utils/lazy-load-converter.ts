import { PaginationFilter } from 'api-client';
import { LazyLoadEvent } from 'primeng/api';

export function LazyLoadToPaginationFilter(
  event: LazyLoadEvent
): PaginationFilter {
  return {
    take: event.rows ?? undefined,
    skip: event.first ?? undefined,
    search: event.globalFilter ?? undefined,
    sortField: event.sortField ?? undefined,
    sortOrder: event.sortOrder ?? undefined
  };
}
