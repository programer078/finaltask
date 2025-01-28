import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepageFullPageRoutingModule } from './homepage-full-routing.module';

import { HomepageFullPage } from './homepage-full.page';
import { KhuramModule } from "../khuram/khuram.module";
import { CardmadualModule } from "../cardmadual/cardmadual.module";

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepageFullPageRoutingModule,
    KhuramModule,
    CardmadualModule
],
  declarations: [HomepageFullPage]
})
export class HomepageFullPageModule {}
