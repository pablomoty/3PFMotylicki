import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepetirDirective } from './directivas/repetir.directive';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { MensajeErrorPipe } from './pipes/mensaje-error.pipe';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';



@NgModule({
  declarations: [
    RepetirDirective,
    ResaltadoDirective,
    MensajeErrorPipe,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
