import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaggerComponent } from './tagger.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'groups'
  },
  {
    path: 'groups',
    component: TaggerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './features/resource-group-list/resource-group-list.module'
          ).then(m => m.ResourceGroupListModule)
      },
      {
        path: ':id',
        loadChildren: () =>
          import(
            './features/resource-group-detail/resource-group-detail.module'
          ).then(m => m.ResourceGroupDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaggerRoutingModule {}
