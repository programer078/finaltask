import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidebarHomePageRoutingModule } from './sidebar-home-routing.module';

import { SidebarHomePage } from './sidebar-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidebarHomePageRoutingModule
  ],
  declarations: [SidebarHomePage]
})
export class SidebarHomePageModule {}

