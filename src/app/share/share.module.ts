import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FfooComponent } from '../ffoo/ffoo.component';


@NgModule({
  declarations: [FfooComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [FfooComponent]
})
export class ShareModule { }
