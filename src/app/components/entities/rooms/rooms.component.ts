import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Room } from '../../../models/Room';
import { RoomService } from '../../../services/room/room.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  room = new Room();
  roomList: Room[] = [];
  roomService = inject(RoomService);

  table:boolean = true;
  buttons:boolean = true;

  constructor() {}

  create() {

    this.roomService.create(this.room).subscribe({
      
      next: msg => {
        this.readAll();      
        this.room = new Room();
        alert(msg);        
      },
            
      error: err => {
        alert("Error at creating user" + err);
      }

    });

  }

  read() {}

  readAll() {

    this.roomService.readAll().subscribe({

      next: roomList => {
        this.roomList = roomList;
      },
      error: err => {
        alert("Error at reading: " + this.roomList.length);
      }

    });

  }

  update() {}

  delete() {

    this.table = false;
    this.buttons = false;
    
    this.roomService.delete(this.room.id).subscribe({

      next: msg => {
        alert(msg);
        this.roomList.splice(1);

        this.room = new Room();
        this.table = true;
        this.buttons = true;
      },
      error: err => {
        alert(err + "Error at delete");
      }

    })

  }

  select(position:number) {

    this.room = this.roomList[position];

    this.table = false;
    this.buttons = false;

  }

  cancel() {

    this.room = new Room();

    this.table = true;
    this.buttons = true;

  }

  ngOnInit() {
    this.readAll();
  }

}
