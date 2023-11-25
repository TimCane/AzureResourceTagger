import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ResourcesTableComponent } from './resources-table.component';

import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [ResourcesTableComponent],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    InputTextModule,
    ButtonModule,
    RouterModule
  ],
  exports: [ResourcesTableComponent]
})
export class ResourcesTableModule {}
