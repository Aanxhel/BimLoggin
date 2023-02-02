import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from "./user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  users: User[] =[]; 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users=users
      }

    );
  }
}
