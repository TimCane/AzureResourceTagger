import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Resource } from 'api-client';

export interface ResourcesState extends EntityState<Resource> {
  selectedResourceId: string | null;
  total: number | null;

  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'; //TODO: Enum
}

export function selectResourceId(resource: Resource): string {
  return resource.id;
}

export const resourcesAdapter = createEntityAdapter<Resource>({
  selectId: selectResourceId
});

export const initialState: ResourcesState = resourcesAdapter.getInitialState({
  selectedResourceId: null,
  total: 0,
  error: null,
  status: 'pending'
});
