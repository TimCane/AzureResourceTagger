import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceGroupDetailRoutingModule } from './resource-group-detail-routing.module';
import { ResourceGroupDetailComponent } from './resource-group-detail.component';


@NgModule({
  declarations: [
    ResourceGroupDetailComponent
  ],
  imports: [
    CommonModule,
    ResourceGroupDetailRoutingModule
  ]
})
export class ResourceGroupDetailModule { }
