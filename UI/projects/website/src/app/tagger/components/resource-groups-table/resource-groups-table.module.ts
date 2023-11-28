import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ResourceGroupsTableComponent } from './resource-groups-table.component';

@NgModule({
  declarations: [ResourceGroupsTableComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule
  ],
  exports: [ResourceGroupsTableComponent]
})
export class ResourceGroupsTableModule {}
