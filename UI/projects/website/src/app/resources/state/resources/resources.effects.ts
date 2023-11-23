import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ResourcesService } from 'api-client';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../../../app.state';
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
      switchMap(({ id, filter }) =>
        from(this.resourcesService.getResources(id, filter)).pipe(
          map(({ data, total }) => {
            console.log(data);

            return loadResourcesSuccess({
              resources: data ?? [],
              total: total ?? 0
            });
          }),
          catchError(error => of(loadResourcesFailure({ error })))
        )
      )
    )
  );
}
