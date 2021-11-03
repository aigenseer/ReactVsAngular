import { Component } from '@angular/core';
import {User} from "./model/user.model";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  users: User[] = [];

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    return this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

}
