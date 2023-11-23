import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResourceGroupsTableModule } from '../../components/resource-groups-table/resource-groups-table.module';
import { ResourceGroupListRoutingModule } from './resource-group-list-routing.module';
import { ResourceGroupListComponent } from './resource-group-list.component';

@NgModule({
  declarations: [ResourceGroupListComponent],
  imports: [
    CommonModule,
    ResourceGroupListRoutingModule,
    ResourceGroupsTableModule
  ]
})
export class ResourceGroupListModule {}
