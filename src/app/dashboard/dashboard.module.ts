import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenunavegacionComponent } from './layout/menunavegacion/menunavegacion.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { TablaComponent } from './pages/alumnos/components/tabla/tabla.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 




@NgModule({
  declarations: [
    DashboardComponent,
    MenunavegacionComponent,
    ToolbarComponent,
    TablaComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule
    
    

  ]
})
export class DashboardModule { }
