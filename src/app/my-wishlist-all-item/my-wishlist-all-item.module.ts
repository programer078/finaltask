import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWishlistAllItemPageRoutingModule } from './my-wishlist-all-item-routing.module';

import { MyWishlistAllItemPage } from './my-wishlist-all-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyWishlistAllItemPageRoutingModule
  ],
  declarations: [MyWishlistAllItemPage]
})
export class MyWishlistAllItemPageModule {}
