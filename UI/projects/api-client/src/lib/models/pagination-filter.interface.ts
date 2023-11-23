export interface PaginationFilter {
  skip: number | undefined;
  take: number | undefined;
  search: string | undefined;
  sortField: string | undefined;
  sortOrder: number | undefined;
}
