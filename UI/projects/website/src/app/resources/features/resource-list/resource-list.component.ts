import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PaginationFilter } from 'api-client';
import { AppState } from '../../../app.state';
import {} from '../../state/resource-groups/resource-groups.selectors';
import { loadResources } from '../../state/resources/resources.actions';
import {
  getResources,
  getResourcesTotal
} from '../../state/resources/resources.selectors';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  public resources$ = this.store.select(getResources);
  public total$ = this.store.select(getResourcesTotal);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let filter: PaginationFilter = {
      search: '',
      skip: 0,
      sortField: '',
      sortOrder: 1,
      take: 10
    };
    this.store.dispatch(
      loadResources({
        id: this.route.snapshot.paramMap.get('id') as string,
        filter
      })
    );
  }
}
