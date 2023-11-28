import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ResourceGroupsService } from 'api-client';
import {
  catchError,
  filter,
  from,
  map,
  of,
  switchMap,
  withLatestFrom
} from 'rxjs';
import { AppState } from '../../../app.state';
import {
  loadResourceGroup,
  loadResourceGroupFailure,
  loadResourceGroupSuccess,
  loadResourceGroups,
  loadResourceGroupsFailure,
  loadResourceGroupsSuccess
} from './resource-groups.actions';
import { getResourceGroups } from './resource-groups.selectors';

@Injectable()
export class ResourceGroupsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private resourceGroupsService: ResourceGroupsService
  ) {}
  loadResourceGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResourceGroups),
      switchMap(({ filter }) =>
        from(this.resourceGroupsService.getResourceGroups(filter)).pipe(
          map(({ groups, total }) => {
            return loadResourceGroupsSuccess({
              groups: groups ?? [],
              total: total ?? 0
            });
          }),
          catchError(error => of(loadResourceGroupsFailure({ error })))
        )
      )
    )
  );

  loadResourceGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResourceGroup),
      withLatestFrom(this.store.select(getResourceGroups)),
      filter(([_action, groups]) => groups && groups.length == 0),
      switchMap(([{ selectedResourceGroupId }, _]) =>
        from(
          this.resourceGroupsService.getResourceGroup(selectedResourceGroupId)
        ).pipe(
          map(({ group }) => {
            return loadResourceGroupSuccess({
              group: group!
            });
          }),
          catchError(error => of(loadResourceGroupFailure({ error })))
        )
      )
    )
  );
}
