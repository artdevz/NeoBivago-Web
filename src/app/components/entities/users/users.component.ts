import { Component, inject } from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  user = new User();
  userList: User[] = [];
  userService = inject(UserService);

  table:boolean = true;
  buttons:boolean = true;

  constructor() {}

  create() {  

    this.userService.create(this.user).subscribe({
      
      next: msg => {
        this.user = new User();
        this.readAll();      
        alert(msg);        
      },

      error: err => {
        alert("Error at creating user" + err);
      }

    });
        
  }

  readAll() {

    this.userService.readAll().subscribe({
      
      next: userList => {
        this.userList = userList;
      },
      error: err => {
        alert("Error at reading: " + this.userList.length)
      }

    });      
  }

  update() {

    this.table = false;
    this.buttons = false;
    
    this.userService.update(new User(this.user.name), this.user.id).subscribe({

      next: msg => {
        this.table = true;
        this.buttons = true;
        this.user = new User();
        this.readAll();
        alert(msg);
      },

      error: err => {
        alert(err + "Error at update");
      }

    })
  }

  delete() {

    this.table = false;
    this.buttons = false;
    
    this.userService.delete(this.user.id).subscribe({

      next: msg => {
        this.userList.splice(1);
        
        this.table = true;
        this.buttons = true;
        this.user = new User();
        this.readAll();
        alert(msg);
      },

      error: err => {
        alert(err + "Error at delete");
      }

    })

  }

  select(position:number) {

    this.user = this.userList[position];

    this.table = false;
    this.buttons = false;

  }

  cancel() {

    this.user = new User();

    this.table = true;
    this.buttons = true;

  }

  ngOnInit() {
    this.readAll();
  }

}
