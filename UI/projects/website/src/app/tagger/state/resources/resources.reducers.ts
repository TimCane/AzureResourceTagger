import { createReducer, on } from '@ngrx/store';
import { selectResourceGroup } from '../resource-groups/resource-groups.actions';
import {
  loadResources,
  loadResourcesFailure,
  loadResourcesSuccess
} from './resources.actions';
import {
  ResourcesState,
  initialState,
  resourcesAdapter
} from './resources.state';

export const resourcesReducer = createReducer<ResourcesState>(
  initialState,

  on(selectResourceGroup, () => {
    return resourcesAdapter.removeAll({
      ...initialState
    });
  }),

  on(loadResources, state => ({
    ...state,
    total: 0,
    status: 'loading',
    selectedResourceId: null
  })),

  on(loadResourcesSuccess, (state, { resources, total }) => {
    return resourcesAdapter.setAll(resources, {
      ...state,
      total: total,
      error: null,
      status: 'success'
    });
  }),

  on(loadResourcesFailure, (state, { error }) => {
    return resourcesAdapter.removeAll({
      ...state,
      total: 0,
      selectedResourceId: null,
      error: error,
      status: 'error'
    });
  })
);

export const getSelectedResourceId = (state: ResourcesState) =>
  state.selectedResourceId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = resourcesAdapter.getSelectors();

// select the array of resource ids
export const selectResourceIds = selectIds;

// select the dictionary of resource entities
export const selectResourceEntities = selectEntities;

// select the array of resources
export const selectAllResources = selectAll;

// select the total resource count
export const selectResourceTotal = selectTotal;
