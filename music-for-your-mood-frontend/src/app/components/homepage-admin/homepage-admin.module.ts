import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageAdminComponent } from './homepage-admin.component';
import { Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Routes = [
  {
    path: ' ',
    component: HomepageAdminComponent
  }
]

@NgModule({
  declarations: [
    HomepageAdminComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    HomepageAdminComponent
  ]
})
export class HomepageAdminModule { }
