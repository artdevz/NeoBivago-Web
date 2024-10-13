import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from "../layout/header/header.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  user = new User();
  userList: User[] = [];
  userService = inject(UserService);

  table:boolean = true;
  buttons:boolean = true;

  constructor() {}

  create():void {    
    this.userService.create(this.user)
    .subscribe(returned => {
      alert("Chegou em subscribe")
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
        alert(msg);
      },
      error: err => {
        alert(err + "Error :(");
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
