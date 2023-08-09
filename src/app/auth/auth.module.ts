import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    
    

  ],
  imports: [
    CommonModule,
    MatCardModule
    
  ]
})
export class AuthModule { }
