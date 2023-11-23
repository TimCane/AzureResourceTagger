import { createReducer, on } from '@ngrx/store';
import {
  loadResourceGroups,
  loadResourceGroupsFailure,
  loadResourceGroupsSuccess
} from './resource-groups.actions';
import {
  ResourceGroupsState,
  initialState,
  resourcesAdapter
} from './resource-groups.state';

export const resourceGroupsReducer = createReducer<ResourceGroupsState>(
  initialState,
  on(loadResourceGroups, state => ({
    ...state,
    total: 0,
    status: 'loading',
    selectedResourceGroupId: null
  })),

  on(loadResourceGroupsSuccess, (state, { resources, total }) => {
    return resourcesAdapter.setAll(resources, {
      ...state,
      total: total,
      error: null,
      status: 'success'
    });
  }),

  on(loadResourceGroupsFailure, (state, { error }) => {
    return resourcesAdapter.removeAll({
      ...state,
      total: 0,
      selectedResourceGroupId: null,
      error: error,
      status: 'error'
    });
  })
);

export const getSelectedResourceGroupId = (state: ResourceGroupsState) =>
  state.selectedResourceGroupId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = resourcesAdapter.getSelectors();

// select the array of resource ids
export const selectResourceGroupIds = selectIds;

// select the dictionary of resource entities
export const selectResourceGroupEntities = selectEntities;

// select the array of resources
export const selectAllResourceGroups = selectAll;

// select the total resource count
export const selectResourceGroupTotal = selectTotal;
