import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Resource } from 'api-client';
import { LazyLoadEvent } from 'primeng/api';
import { LazyLoadToPaginationFilter } from 'projects/website/src/app/shared/utils/lazy-load-converter';
import { AppState } from '../../../../app.state';
import { loadResources } from '../../../state/resources/resources.actions';
import {
  getResources,
  getResourcesTotal
} from '../../../state/resources/resources.selectors';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent {
  public resources$ = this.store.select(getResources);
  public total$ = this.store.select(getResourcesTotal);

  constructor(private store: Store<AppState>, private router: Router) {}

  onLoadResources(event: LazyLoadEvent) {
    let filter = LazyLoadToPaginationFilter(event);
    this.store.dispatch(loadResources({ filter }));
  }

  onResourceSelection(resource: Resource) {
    if (resource) {
      this.router.navigate(['s', resource.id]);
    }
  }
}
