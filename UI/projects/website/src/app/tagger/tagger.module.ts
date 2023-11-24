import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResourceGroupsEffects } from './state/resource-groups/resource-groups.effects';
import { resourceGroupsReducer } from './state/resource-groups/resource-groups.reducers';
import { ResourcesEffects } from './state/resources/resources.effects';
import { resourcesReducer } from './state/resources/resources.reducers';
import { TaggerRoutingModule } from './tagger-routing.module';
import { TaggerComponent } from './tagger.component';

@NgModule({
  declarations: [TaggerComponent],
  imports: [
    CommonModule,
    TaggerRoutingModule,
    StoreModule.forFeature('resourceGroupsFeature', resourceGroupsReducer),
    StoreModule.forFeature('resourcesFeature', resourcesReducer),
    EffectsModule.forFeature([ResourcesEffects, ResourceGroupsEffects])
  ]
})
export class TaggerModule {}
