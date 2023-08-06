import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenunavegacionComponent } from './layout/menunavegacion/menunavegacion.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MenunavegacionComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
