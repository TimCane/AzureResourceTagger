import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import {
  loadResourceGroup,
  selectResourceGroup
} from '../../state/resource-groups/resource-groups.actions';
import { getSelectedResourceGroup } from '../../state/resource-groups/resource-groups.selectors';

@Component({
  selector: 'app-resource-group-detail',
  templateUrl: './resource-group-detail.component.html',
  styleUrls: ['./resource-group-detail.component.scss']
})
export class ResourceGroupDetailComponent implements OnInit {
  selectedResourceGroup$ = this.store.select(getSelectedResourceGroup);

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let selectedResourceGroupId = this.activatedRoute.snapshot.params['id'];
    if (selectedResourceGroupId) {
      this.store.dispatch(selectResourceGroup({ selectedResourceGroupId }));
      this.store.dispatch(loadResourceGroup({ selectedResourceGroupId }));
    }
  }
}
