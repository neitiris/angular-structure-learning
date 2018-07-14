import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {UnknownpageComponent} from './unknownpage/unknownpage.component';
import {BasecoverComponent} from './basecover/basecover.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserslistComponent} from './userslist/userslist.component';
import {ManageuserComponent} from './manageuser/manageuser.component';
import {AuthGuardService} from '../services/authguard';


const appRoutes: Routes = [
  { path: '', redirectTo: 'land', pathMatch: 'full'},
  { path: 'land', component: LandingpageComponent},
  { path: 'login', component: LoginpageComponent},
  { path: 'unknown', component: UnknownpageComponent},

  { path: 'admin', component: BasecoverComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'userlist', component: UserslistComponent},
      {path: 'manageuser', component: ManageuserComponent},
    ],
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}
