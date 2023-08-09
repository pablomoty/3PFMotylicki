import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    
    

  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatCardModule,
    SharedModule
    
  ],exports: [
    AuthComponent
  ]
})
export class AuthModule { }
