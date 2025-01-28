import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCardPageRoutingModule } from './new-card-routing.module';

import { NewCardPage } from './new-card.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCardPageRoutingModule
  ],
  declarations: [NewCardPage]
})
export class NewCardPageModule {}
