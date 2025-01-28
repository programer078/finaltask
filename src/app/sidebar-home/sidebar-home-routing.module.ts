import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarHomePage } from './sidebar-home.page';

const routes: Routes = [
  {
    path: '',
    component: SidebarHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarHomePageRoutingModule {}
