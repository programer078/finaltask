import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateProductPageRoutingModule } from './rate-product-routing.module';

import { RateProductPage } from './rate-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateProductPageRoutingModule
  ],
  declarations: [RateProductPage]
})
export class RateProductPageModule {}
