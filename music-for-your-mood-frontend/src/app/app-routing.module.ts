import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageAdminComponent } from './components/homepage-admin/homepage-admin.component';
import { HomepageAdminModule } from './components/homepage-admin/homepage-admin.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MoodCardComponent } from './components/homepage/mood-card/mood-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SongsComponent } from './components/songs/songs.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'homepage-admin',
    component: HomepageAdminComponent
  },
  {
    path: 'homepage/songs/:id',
    component: SongsComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
