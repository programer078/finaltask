import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewCardPage } from './add-new-card.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewCardPage
  }
];

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewCardPageRoutingModule {}
