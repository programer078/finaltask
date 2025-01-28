import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageFullPage } from './homepage-full.page';

const routes: Routes = [
  {
    path: '',
    component: HomepageFullPage
  }
];

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageFullPageRoutingModule {}
