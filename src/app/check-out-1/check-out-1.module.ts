import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckOut1PageRoutingModule } from './check-out-1-routing.module';

import { CheckOut1Page } from './check-out-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckOut1PageRoutingModule
  ],
  declarations: [CheckOut1Page]
})
export class CheckOut1PageModule {}
