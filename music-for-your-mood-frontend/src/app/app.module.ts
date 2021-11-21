import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { MainModule } from './components/main/main.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { HomepageAdminComponent } from './components/homepage-admin/homepage-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
