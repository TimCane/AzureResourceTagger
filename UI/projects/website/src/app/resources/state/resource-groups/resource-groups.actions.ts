import { createAction, props } from '@ngrx/store';
import { ResourceGroup } from 'api-client';
import { PaginationFilter } from 'projects/api-client/src/lib/models/pagination-filter.interface';

export const loadResourceGroups = createAction(
  '[ResourceGroup Page] Load ResourceGroups',
  props<{ filter: PaginationFilter }>()
);

export const loadResourceGroupsSuccess = createAction(
  '[ResourceGroup API] ResourceGroup Load Success',
  props<{ resources: ResourceGroup[]; total: number }>()
);

export const loadResourceGroupsFailure = createAction(
  '[ResourceGroup API] ResourceGroup Load Failure',
  props<{ error: string }>()
);
