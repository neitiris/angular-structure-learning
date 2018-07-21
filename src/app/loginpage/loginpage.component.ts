import { Component } from '@angular/core';
import { AuthService } from '../../services/authservice';
import {IAuthData} from '../../shared/interfaces';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  public user: IAuthData = {email: '', password: ''};
  constructor(
    private router: Router,
    private authservice: AuthService,
  ) {}
  // Calling Exit function from AuthService
  quit() {
    this.authservice.logOutFunk();
  }
  // Calling boolean status variable logged from AuthService
  lLogged() {
    return this.authservice.logged;
  }
  // Calling authorisation function from AuthService
  auth(user) {
    this.authservice.authenticate(user).subscribe(
      (userdata: any) => {
        console.log('resp', userdata);
        if (userdata && userdata.data && userdata.data.authToken) {
          localStorage. setItem('currentUser', JSON.stringify(userdata.data));
          this.user.email = userdata.data.email;
          console.log('Login Sucsess');
          this.router.navigate([ 'admin', 'dashboard']);
        }
      },
      (err: any) => {
        console.log('err', err);
      }
    );
  }
}
