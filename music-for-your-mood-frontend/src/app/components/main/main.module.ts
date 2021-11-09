import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { HomepageModule } from '../homepage/homepage.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MainComponent } from './main.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    HomepageModule,
    MatTableModule,
    MatFormFieldModule,
    LoginModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
