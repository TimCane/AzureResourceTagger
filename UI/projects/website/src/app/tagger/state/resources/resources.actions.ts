import { createAction, props } from '@ngrx/store';
import { Resource } from 'api-client';
import { PaginationFilter } from 'projects/api-client/src/lib/models/pagination-filter.interface';

export const loadResources = createAction(
  '[Resource Page] Load Resources',
  props<{ filter: PaginationFilter }>()
);

export const loadResourcesSuccess = createAction(
  '[Resource API] Resource Load Success',
  props<{ resources: Resource[]; total: number }>()
);

export const loadResourcesFailure = createAction(
  '[Resource API] Resource Load Failure',
  props<{ error: string }>()
);
