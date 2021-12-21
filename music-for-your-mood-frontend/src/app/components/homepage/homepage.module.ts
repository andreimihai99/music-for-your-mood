import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MoodCardComponent } from './mood-card/mood-card.component';
import { MoodCardModule } from './mood-card/mood-card.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: ' ',
    component: HomepageComponent
  }
]

@NgModule({
  declarations: [
    HomepageComponent,
    MoodCardComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MoodCardModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class HomepageModule { }
