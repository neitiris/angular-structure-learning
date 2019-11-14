import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShortAboutPageComponent} from './short-about-page/short-about-page.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {UnknownpageComponent} from './unknownpage/unknownpage.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserslistComponent} from './userslist/userslist.component';
import {ManageuserComponent} from './manageuser/manageuser.component';
import {AuthGuardService} from '../services/authguard';
import {PublicPageComponent} from './public-page/public-page.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'land', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'unknown', component: UnknownpageComponent },

  { path: '', component: PublicPageComponent,
    children: [
      { path: '', component: ShortAboutPageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
    ],
  },

  { path: 'admin', component: AdminPageComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'user-list', component: UserslistComponent },
      {path: 'manage/:id', component: ManageuserComponent },
    ],
    canActivate: [ AuthGuardService ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}
