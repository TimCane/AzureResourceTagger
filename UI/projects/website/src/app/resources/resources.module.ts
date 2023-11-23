import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { ResourceGroupsEffects } from './state/resource-groups/resource-groups.effects';
import { resourceGroupsReducer } from './state/resource-groups/resource-groups.reducers';
import { ResourcesEffects } from './state/resources/resources.effects';
import { resourcesReducer } from './state/resources/resources.reducers';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    StoreModule.forFeature('resourceGroupsFeature', resourceGroupsReducer),
    StoreModule.forFeature('resourcesFeature', resourcesReducer),
    EffectsModule.forFeature([ResourcesEffects, ResourceGroupsEffects])
  ]
})
export class ResourcesModule {}
