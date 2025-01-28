import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderInfo1Page } from './order-info-1.page';

const routes: Routes = [
  {
    path: '',
    component: OrderInfo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderInfo1PageRoutingModule {}
