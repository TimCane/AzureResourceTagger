import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ResourceGroupsService } from 'api-client';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../../../app.state';
import {
  loadResourceGroups,
  loadResourceGroupsFailure,
  loadResourceGroupsSuccess
} from './resource-groups.actions';

@Injectable()
export class ResourceGroupsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private resourcesService: ResourceGroupsService
  ) {}
  loadResourceGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResourceGroups),
      switchMap(({ filter }) =>
        from(this.resourcesService.getResourceGroups(filter)).pipe(
          map(({ data, total }) => {
            console.log(data);

            return loadResourceGroupsSuccess({
              resources: data ?? [],
              total: total ?? 0
            });
          }),
          catchError(error => of(loadResourceGroupsFailure({ error })))
        )
      )
    )
  );
}
