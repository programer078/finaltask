import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckOut3PageRoutingModule } from './check-out-3-routing.module';

import { CheckOut3Page } from './check-out-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckOut3PageRoutingModule
  ],
  declarations: [CheckOut3Page]
})
export class CheckOut3PageModule {}
