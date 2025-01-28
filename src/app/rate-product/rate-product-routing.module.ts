import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateProductPage } from './rate-product.page';

const routes: Routes = [
  {
    path: '',
    component: RateProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateProductPageRoutingModule {}
