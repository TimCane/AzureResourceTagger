import { createReducer, on } from '@ngrx/store';
import {
  loadResourceGroup,
  loadResourceGroupFailure,
  loadResourceGroupSuccess,
  loadResourceGroups,
  loadResourceGroupsFailure,
  loadResourceGroupsSuccess,
  selectResourceGroup
} from './resource-groups.actions';
import {
  ResourceGroupsState,
  initialState,
  resourceGroupsAdapter
} from './resource-groups.state';

export const resourceGroupsReducer = createReducer<ResourceGroupsState>(
  initialState,

  on(selectResourceGroup, (state, { selectedResourceGroupId }) => ({
    ...state,
    selectedResourceGroupId
  })),

  on(loadResourceGroups, state => ({
    ...state,
    total: 0,
    status: 'loading',
    selectedResourceGroupId: null
  })),

  on(loadResourceGroupsSuccess, (state, { groups, total }) => {
    return resourceGroupsAdapter.setAll(groups, {
      ...state,
      total: total,
      error: null,
      status: 'success'
    });
  }),

  on(loadResourceGroupsFailure, (state, { error }) => {
    return resourceGroupsAdapter.removeAll({
      ...state,
      total: 0,
      selectedResourceGroupId: null,
      error: error,
      status: 'error'
    });
  }),

  on(loadResourceGroup, state => ({
    ...state,
    status: 'loading'
  })),

  on(loadResourceGroupSuccess, (state, { group }) => {
    return resourceGroupsAdapter.setOne(group, {
      ...state,
      error: null,
      status: 'success'
    });
  }),

  on(loadResourceGroupFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  }))
);

export const getSelectedResourceGroupId = (state: ResourceGroupsState) =>
  state.selectedResourceGroupId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = resourceGroupsAdapter.getSelectors();

// select the array of resource ids
export const selectResourceGroupIds = selectIds;

// select the dictionary of resource entities
export const selectResourceGroupEntities = selectEntities;

// select the array of resources
export const selectAllResourceGroups = selectAll;

// select the total resource count
export const selectResourceGroupTotal = selectTotal;
