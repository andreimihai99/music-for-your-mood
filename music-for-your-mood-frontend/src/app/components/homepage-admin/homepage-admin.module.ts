import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageAdminComponent } from './homepage-admin.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  {
    path: ' ',
    component: HomepageAdminComponent
  }
]

@NgModule({
  declarations: [
    //HomepageAdminModule
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageAdminModule { }
