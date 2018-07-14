import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApproutingModule} from './approuter.module';
import {ApiService} from '../services/api';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../services/authservice/auth.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {UserService} from '../services/userservice';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UnknownpageComponent } from './unknownpage/unknownpage.component';
import { BasecoverComponent } from './basecover/basecover.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import {AuthGuardService} from '../services/authguard';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginpageComponent,
    UnknownpageComponent,
    BasecoverComponent,
    DashboardComponent,
    UserslistComponent,
    ManageuserComponent,

  ],
  imports: [
    ApproutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpModule,
    HttpClientModule,
    ApiService,
    UserService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
