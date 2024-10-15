import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../../../models/Hotel';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {

  hotel = new Hotel();
  hotelList: Hotel[] = [];
  hotelService = inject(HotelService);

  table:boolean = true;
  buttons:boolean = true;

  constructor() {}

  create() {

    this.hotelService.create(this.hotel)
    .subscribe(returned => {
      this.hotelList.push(returned);
      this.hotel = new Hotel();
    });

  }

  read() {}

  readAll() {

    this.hotelService.readAll().subscribe({

      next: hotelList => {
        this.hotelList = hotelList;
      },
      error: err => {
        alert("Error at reading: " + this.hotelList.length);
      }

    });

  }

  update() {}

  delete() {

    this.table = false;
    this.buttons = false;
    
    this.hotelService.delete(this.hotel.id).subscribe({

      next: msg => {
        alert(msg);
        this.hotelList.splice(1);

        this.hotel = new Hotel();
        this.table = true;
        this.buttons = true;
      },
      error: err => {
        alert(err + "Error at delete");
      }

    })

  }

  select(position:number) {

    this.hotel = this.hotelList[position];

    this.table = false;
    this.buttons = false;

  }

  cancel() {

    this.hotel = new Hotel();

    this.table = true;
    this.buttons = true;

  }

  ngOnInit() {
    this.readAll();
  }

}
