import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckOut2Page } from './check-out2.page';

const routes: Routes = [
  {
    path: '',
    component: CheckOut2Page
  }
];

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckOut2PageRoutingModule {}
