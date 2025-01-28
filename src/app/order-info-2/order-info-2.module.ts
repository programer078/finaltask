import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderInfo2PageRoutingModule } from './order-info-2-routing.module';

import { OrderInfo2Page } from './order-info-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderInfo2PageRoutingModule
  ],
  declarations: [OrderInfo2Page]
})
export class OrderInfo2PageModule {}
