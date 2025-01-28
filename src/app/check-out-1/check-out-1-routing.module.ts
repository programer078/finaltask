import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckOut1Page } from './check-out-1.page';

const routes: Routes = [
  {
    path: '',
    component: CheckOut1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckOut1PageRoutingModule {}
