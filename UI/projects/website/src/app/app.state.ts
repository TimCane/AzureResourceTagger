import { ResourceGroupsState } from './resources/state/resource-groups/resource-groups.state';
import { ResourcesState } from './resources/state/resources/resources.state';

export interface AppState {
  resources: ResourcesState;
  resourceGroups: ResourceGroupsState;
}
