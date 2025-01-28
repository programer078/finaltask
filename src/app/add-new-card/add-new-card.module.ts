import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewCardPageRoutingModule } from './add-new-card-routing.module';

import { AddNewCardPage } from './add-new-card.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewCardPageRoutingModule
  ],
  declarations: [AddNewCardPage]
})
export class AddNewCardPageModule {}
