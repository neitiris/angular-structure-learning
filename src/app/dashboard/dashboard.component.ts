import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/userservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public usersList: any[] = [];
  public usersListString = '';

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  // request to backend for users list
  public getUsers() {
    const urlParams = '?page=1&limit=50';
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
}
