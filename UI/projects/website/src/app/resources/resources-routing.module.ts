import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';

const routes: Routes = [
  {
    path: 'groups',
    component: ResourcesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../resources/features/resource-group-list/resource-group-list.module'
          ).then(m => m.ResourceGroupListModule)
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./features/resource-list/resource-list.module').then(
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
export class ResourcesRoutingModule {}
