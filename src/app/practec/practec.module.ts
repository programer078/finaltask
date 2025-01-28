import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PractecPageRoutingModule } from './practec-routing.module';

import { PractecPage } from './practec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PractecPageRoutingModule
  ],
  declarations: [PractecPage]
})
export class PractecPageModule {}
