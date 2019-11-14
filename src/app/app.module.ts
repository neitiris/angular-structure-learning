import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApproutingModule} from './approuter.module';
import {ApiService} from '../services/api';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from '../services/authservice/auth.service';
import {FormsModule} from '@angular/forms';
import {UserService} from '../services/userservice';
import { ShortAboutPageComponent } from './short-about-page/short-about-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UnknownpageComponent } from './unknownpage/unknownpage.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import {AuthGuardService} from '../services/authguard';
import { AboutComponent } from './about/about.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { SkillsComponent } from './skills/skills.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ShortAboutPageComponent,
    LoginpageComponent,
    UnknownpageComponent,
    AdminPageComponent,
    DashboardComponent,
    UserslistComponent,
    ManageuserComponent,
    AboutComponent,
    PublicPageComponent,
    SkillsComponent,

  ],
  imports: [
    Angular2FontawesomeModule,
    ApproutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    ApiService,
    UserService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
