import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
