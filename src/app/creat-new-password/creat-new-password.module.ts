import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatNewPasswordPageRoutingModule } from './creat-new-password-routing.module';

import { CreatNewPasswordPage } from './creat-new-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatNewPasswordPageRoutingModule
  ],
  declarations: [CreatNewPasswordPage]
})
export class CreatNewPasswordPageModule {}
