import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResourceGroupsState, resourcesAdapter } from './resource-groups.state';

export const resourcesFeature = createFeatureSelector<ResourceGroupsState>(
  'resourceGroupsFeature'
);
const selector = <T>(mapping: (state: ResourceGroupsState) => T) =>
  createSelector(resourcesFeature, mapping);

const { selectEntities, selectAll } = resourcesAdapter.getSelectors();

export const selectResourceGroupEntities = selector(selectEntities);

export const getResourceGroups = selector(selectAll);

export const getSelectedResourceGroupId = selector(
  state => state.selectedResourceGroupId
);

export const getResourceGroupsTotal = selector(state => state.total);

export const getResourceGroup = createSelector(
  selectResourceGroupEntities,
  getSelectedResourceGroupId,
  (resources, selectedResourceGroupId) => {
    if (selectedResourceGroupId) {
      return resources[selectedResourceGroupId];
    }
    return null;
  }
);
