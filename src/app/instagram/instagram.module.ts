import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstagramPageRoutingModule } from './instagram-routing.module';

import { InstagramPage } from './instagram.page';
import { CardmadualModule } from "../cardmadual/cardmadual.module";

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstagramPageRoutingModule,
    CardmadualModule
],
  declarations: [InstagramPage]
})
export class InstagramPageModule {}
