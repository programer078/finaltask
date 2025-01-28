import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PractecPage } from './practec.page';

const routes: Routes = [
  {
    path: '',
    component: PractecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PractecPageRoutingModule {}
