import { Component, inject } from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user.service';
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

  create():void {    
    this.userService.create(this.user)
    .subscribe(returned => {      
      this.userList.push(returned);
      this.user = new User();
      alert("Success at Sign Up!");
    });
  }

  readAll():void {
    this.userService.readAll().subscribe({
      
      next: userList => {
        this.userList = userList;
      },
      error: err => {
        alert("Error!" + this.userList.length)
      }

    });      
  }

  update():void {
    this.table = false;
    this.buttons = false;

    this.userService.update(this.user, this.user.id)
    .subscribe(returned => {

      let position = this.userList.findIndex(obj => {
        return obj.id == returned.id
      });

      this.userList[position] = returned;

      this.table = true;
      this.buttons = true;

      alert("Success at Update User!");

    })
  }

  delete():void {
    this.table = false;
    this.buttons = false;
    
    this.userService.delete(this.user.id).subscribe({

      next: msg => {
        // this.userList.splice(this.user, 1);
        alert(msg);
      },
      error: err => {
        alert(err + "Error at delete");
      }

    })

  }

  select(position:number):void {

    this.user = this.userList[position];

    this.table = false;
    this.buttons = false;

  }

  cancel():void {

    this.user = new User();

    this.table = true;
    this.buttons = true;

  }

  ngOnInit() {
    this.readAll();
  }

}
