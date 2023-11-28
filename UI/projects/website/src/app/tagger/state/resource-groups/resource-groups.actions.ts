import { createAction, props } from '@ngrx/store';
import { ResourceGroup } from 'api-client';
import { PaginationFilter } from 'projects/api-client/src/lib/models/pagination-filter.interface';

export const selectResourceGroup = createAction(
  '[Resource Group List Page] Select Resource Groups',
  props<{ selectedResourceGroupId: string }>()
);

export const loadResourceGroups = createAction(
  '[Resource Group List  Page] Load Resource Groups',
  props<{ filter: PaginationFilter }>()
);

export const loadResourceGroupsSuccess = createAction(
  '[Resource Group API] Load Resource Groups Success',
  props<{ groups: ResourceGroup[]; total: number }>()
);

export const loadResourceGroupsFailure = createAction(
  '[Resource Group API] Load Resource Groups Failure',
  props<{ error: string }>()
);

export const loadResourceGroup = createAction(
  '[Resource Group Detail Page] Load Resource Group',
  props<{ selectedResourceGroupId: string }>()
);

export const loadResourceGroupSuccess = createAction(
  '[Resource Group API] Load Resource Group Success',
  props<{ group: ResourceGroup }>()
);

export const loadResourceGroupFailure = createAction(
  '[Resource Group API] Load Resource Group Failure',
  props<{ error: string }>()
);
