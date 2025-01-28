import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderInfo1PageRoutingModule } from './order-info-1-routing.module';

import { OrderInfo1Page } from './order-info-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderInfo1PageRoutingModule
  ],
  declarations: [OrderInfo1Page]
})
export class OrderInfo1PageModule {}
