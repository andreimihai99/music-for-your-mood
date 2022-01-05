import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { Routes } from '@angular/router';
import { AllSongsComponent } from '../all-songs/all-songs.component';

const routes: Routes = [
  {
    path: ' ',
    component: AllSongsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    //MatPaginator
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule
  ]
})
export class AllSongsModule { }
