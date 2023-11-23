import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResourcesState, resourcesAdapter } from './resources.state';

export const resourcesFeature = createFeatureSelector<ResourcesState>(
  'resourcesFeature'
);
const selector = <T>(mapping: (state: ResourcesState) => T) =>
  createSelector(resourcesFeature, mapping);

const { selectEntities, selectAll } = resourcesAdapter.getSelectors();

export const selectResourceEntities = selector(selectEntities);

export const getResources = selector(selectAll);

export const getSelectedResourceId = selector(
  state => state.selectedResourceId
);

export const getResourcesTotal = selector(state => state.total);

export const getResource = createSelector(
  selectResourceEntities,
  getSelectedResourceId,
  (resources, selectedResourceId) => {
    if (selectedResourceId) {
      return resources[selectedResourceId];
    }
    return null;
  }
);
