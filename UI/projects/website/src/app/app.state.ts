import { ResourceGroupsState } from './tagger/state/resource-groups/resource-groups.state';
import { ResourcesState } from './tagger/state/resources/resources.state';

export interface AppState {
  resources: ResourcesState;
  resourceGroups: ResourceGroupsState;
}
