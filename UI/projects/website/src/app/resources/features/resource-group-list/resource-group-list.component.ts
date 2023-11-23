import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LazyLoadEvent } from 'primeng/api';
import { AppState } from '../../../app.state';
import { LazyLoadToPaginationFilter } from '../../../shared/utils/lazy-load-converter';
import { loadResourceGroups } from '../../state/resource-groups/resource-groups.actions';
import {
  getResourceGroups,
  getResourceGroupsTotal
} from '../../state/resource-groups/resource-groups.selectors';

@Component({
  selector: 'app-resource-group-list',
  templateUrl: './resource-group-list.component.html',
  styleUrls: ['./resource-group-list.component.scss']
})
export class ResourceGroupListComponent {
  public resourceGroups$ = this.store.select(getResourceGroups);
  public total$ = this.store.select(getResourceGroupsTotal);

  constructor(private store: Store<AppState>) {}

  onLoadResourceGroups(event: LazyLoadEvent) {
    let filter = LazyLoadToPaginationFilter(event);
    this.store.dispatch(loadResourceGroups({ filter }));
  }
}
