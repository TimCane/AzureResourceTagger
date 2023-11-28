import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceGroupDetailComponent } from './resource-group-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'resources'
  },
  {
    path: '',
    component: ResourceGroupDetailComponent,
    children: [
      {
        path: 'resources',
        loadChildren: () =>
          import('./resource-list/resource-list.module').then(
            m => m.ResourceListModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceGroupDetailRoutingModule {}
