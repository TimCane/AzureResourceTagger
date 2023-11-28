import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ResourcesService } from 'api-client';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AppState } from '../../../app.state';
import { getSelectedResourceGroup } from '../resource-groups/resource-groups.selectors';
import {
  loadResources,
  loadResourcesFailure,
  loadResourcesSuccess
} from './resources.actions';

@Injectable()
export class ResourcesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private resourcesService: ResourcesService
  ) {}
  loadResources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResources),
      withLatestFrom(this.store.select(getSelectedResourceGroup)),
      switchMap(([{ filter }, group]) =>
        from(this.resourcesService.getResources(group?.id!, filter)).pipe(
          map(({ resources, total }) => {
            return loadResourcesSuccess({
              resources: resources ?? [],
              total: total ?? 0
            });
          }),
          catchError(error => of(loadResourcesFailure({ error })))
        )
      )
    )
  );
}
