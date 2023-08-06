import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlumnosModule { }
