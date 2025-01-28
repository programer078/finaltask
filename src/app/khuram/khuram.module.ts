import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    IonicModule,

  ],
  exports: [WorkComponent]
})
export class KhuramModule { }
