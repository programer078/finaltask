import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundResultPage } from './found-result.page';

const routes: Routes = [
  {
    path: '',
    component: FoundResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundResultPageRoutingModule {}
