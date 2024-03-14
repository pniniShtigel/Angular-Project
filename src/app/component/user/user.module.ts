import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule, RouterOutlet } from '@angular/router';

import { NotFoundComponent } from '../not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from '../../app.component';
import { routes } from '../../app.routes';




@NgModule({
  imports:[ CommonModule, AppComponent,LoginComponent,NotFoundComponent,RegisterComponent,LoginComponent,RouterModule.forChild(routes)],
  exports:[RouterModule,NgModule, RouterOutlet]
})
export class UserModule{}





