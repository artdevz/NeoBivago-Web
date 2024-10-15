import { Component, inject } from '@angular/core';
import { Reservation } from '../../../models/Reservation';
import { ReservationService } from '../../../services/reservation/reservation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {

  reservation = new Reservation();
  reservationList: Reservation[] = [];
  reservationService = inject(ReservationService);

  table:boolean = true;
  buttons:boolean = true;

  constructor() {}

  create() {

    this.reservationService.create(this.reservation).subscribe({
      
      next: msg => {
        this.readAll();      
        this.reservation = new Reservation();
        alert(msg);        
      },
            
      error: err => {
        alert("Error at creating user" + err);
      }

    });

  }

  read() {}

  readAll() {

    this.reservationService.readAll().subscribe({

      next: reservationList => {
        this.reservationList = reservationList;
      },
      error: err => {
        alert("Error at reading: " + this.reservationList.length);
      }

    });

  }

  update() {}

  delete() {

    this.table = false;
    this.buttons = false;
    
    this.reservationService.delete(this.reservation.id).subscribe({

      next: msg => {
        alert(msg);
        this.reservationList.splice(1);

        this.reservation = new Reservation();
        this.table = true;
        this.buttons = true;
      },
      error: err => {
        alert(err + "Error at delete");
      }

    })

  }

  select(position:number) {

    this.reservation = this.reservationList[position];

    this.table = false;
    this.buttons = false;

  }

  cancel() {

    this.reservation = new Reservation();

    this.table = true;
    this.buttons = true;

  }

  ngOnInit() {
    this.readAll();
  }

}
