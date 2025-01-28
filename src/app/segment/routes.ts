import { Routes } from "@angular/router";
import { SegmentPage } from "./segment.page";

export const routes: Routes = [
  {
    path: '',
    component: SegmentPage
  },
  { path: 'alert', component: alertPage }
];
