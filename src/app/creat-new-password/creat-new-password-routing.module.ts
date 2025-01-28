import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatNewPasswordPage } from './creat-new-password.page';

const routes: Routes = [
  {
    path: '',
    component: CreatNewPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatNewPasswordPageRoutingModule {}
