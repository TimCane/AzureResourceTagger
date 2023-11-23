import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ResourceGroup } from 'api-client';

export interface ResourceGroupsState extends EntityState<ResourceGroup> {
  selectedResourceGroupId: string | null;
  total: number | null;

  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'; //TODO: Enum
}

export function selectResourceGroupId(resource: ResourceGroup): string {
  return resource.id;
}

export const resourcesAdapter = createEntityAdapter<ResourceGroup>({
  selectId: selectResourceGroupId
});

export const initialState: ResourceGroupsState = resourcesAdapter.getInitialState(
  {
    selectedResourceGroupId: null,
    total: 0,
    error: null,
    status: 'pending'
  }
);
