import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResourcesTableModule } from '../../../components/resources-table/resources-table.module';
import { ResourceListRoutingModule } from './resource-list-routing.module';
import { ResourceListComponent } from './resource-list.component';

@NgModule({
  declarations: [ResourceListComponent],
  imports: [CommonModule, ResourceListRoutingModule, ResourcesTableModule]
})
export class ResourceListModule {}
