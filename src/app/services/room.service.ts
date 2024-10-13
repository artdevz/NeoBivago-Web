import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  http = inject(HttpClient)

  private API:string = "http://localhost:8080/api/room";

  constructor() { }

  readAll(): Observable<Room[]> {    
    return this.http.get<Room[]>(this.API);
  }

}
