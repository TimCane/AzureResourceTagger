import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceGroupListComponent } from './resource-group-list.component';

const routes: Routes = [{ path: '', component: ResourceGroupListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceGroupListRoutingModule {}
