import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundResultPageRoutingModule } from './found-result-routing.module';

import { FoundResultPage } from './found-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundResultPageRoutingModule
  ],
  declarations: [FoundResultPage]
})
export class FoundResultPageModule {}
