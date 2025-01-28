import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCardPage } from './new-card.page';

const routes: Routes = [
  {
    path: '',
    component: NewCardPage
  }
];

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCardPageRoutingModule {}
