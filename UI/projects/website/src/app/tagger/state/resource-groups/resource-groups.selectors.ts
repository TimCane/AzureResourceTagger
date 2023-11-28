import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ResourceGroupsState,
  resourceGroupsAdapter
} from './resource-groups.state';

export const resourceGroupsFeature = createFeatureSelector<ResourceGroupsState>(
  'resourceGroupsFeature'
);
const selector = <T>(mapping: (state: ResourceGroupsState) => T) =>
  createSelector(resourceGroupsFeature, mapping);

const { selectEntities, selectAll } = resourceGroupsAdapter.getSelectors();

export const selectResourceGroupEntities = selector(selectEntities);

export const getResourceGroups = selector(selectAll);

export const getSelectedResourceGroupId = selector(
  state => state.selectedResourceGroupId
);

export const getResourceGroupsTotal = selector(state => state.total);

export const getSelectedResourceGroup = createSelector(
  selectResourceGroupEntities,
  getSelectedResourceGroupId,
  (groups, selectedResourceGroupId) => {
    if (selectedResourceGroupId) {
      return groups[selectedResourceGroupId];
    }
    return null;
  }
);
