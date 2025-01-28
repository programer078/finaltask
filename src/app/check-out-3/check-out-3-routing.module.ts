import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckOut3Page } from './check-out-3.page';

const routes: Routes = [
  {
    path: '',
    component: CheckOut3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckOut3PageRoutingModule {}
