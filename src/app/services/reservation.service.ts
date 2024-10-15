import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  http = inject(HttpClient)

  private API:string = "http://localhost:8080/api/reservation";

  constructor() { }

  create(obj: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.API, obj);
  }

  readAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.API);
  }

  update() {}

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.API + "/" + id, {responseType: 'text' as 'json'});
  }
  
}
