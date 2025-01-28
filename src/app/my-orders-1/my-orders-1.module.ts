import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOrders1PageRoutingModule } from './my-orders-1-routing.module';

import { MyOrders1Page } from './my-orders-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOrders1PageRoutingModule
  ],
  declarations: [MyOrders1Page]
})
export class MyOrders1PageModule {}
