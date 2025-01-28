import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckOut2PageRoutingModule } from './check-out2-routing.module';

import { CheckOut2Page } from './check-out2.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckOut2PageRoutingModule
  ],
  declarations: [CheckOut2Page]
})
export class CheckOut2PageModule {}
