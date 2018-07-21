import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/userservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public usersList: any[] = [];
  public usersListString = '';
  public options: any = {
    checkedAll: false
  };

  constructor(public userService: UserService,
              private router: Router) {
  }

  public ngOnInit() {
    this.getUsers();
  }

  // request to backend for users list
  public getUsers() {
    const urlParams = '?page=1&limit=15';
    this.userService.getUsers(urlParams).subscribe(
      (resp: any) => {
        console.log('getUsers resp', resp);
        this.usersList = resp.rows;
        this.usersListString = JSON.stringify(this.usersList, null, 2);
        console.log('usersListString', this.usersList);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }

  // Route to userEdit by id
  public goToDetails(id) {
    this.router.navigate(['admin', 'manageuser', id]);
  }

  // Route to userEdit for create User
  public createUser() {
    this.router.navigate(['admin', 'manageuser', 'newUser']);
  }

  /**
   * Checkbox handler function
   * check one or all items in usersList
   * @param item
   */
  public check(item?: any) {
    // Provide check of defined list item if it exist
    if (item) {
      // Iterate in usersList and check/uncheck only item with same id
      this.usersList = this.usersList.map((u: any) => {
        if (u.id === item.id) {
          u.checked = !u.checked;
          // Uncheck general checkbox as it can't be checked if any of 'checked' differs from rest of items
          this.options.checkedAll = false;
        }
        return u;
      });
    } else {
      // Check/Uncheck all items if no defined item to check
      this.options.checkedAll = !this.options.checkedAll;
      this.usersList = this.usersList.map((u: any) => {
        u.checked = this.options.checkedAll;
        return u;
      });
    }
  }
}
