import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/user.model";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {

  @Input() users: User[];


  constructor() {

  }

  ngOnInit(): void {

  }

  deleteUser(user: User): void{
    this.users = this.users.filter(u => u.id !== user.id);
  }

}
