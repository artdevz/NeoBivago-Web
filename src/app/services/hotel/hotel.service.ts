import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../models/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  http = inject(HttpClient)

  private API:string = "http://localhost:8080/api/hotel";

  constructor() { }

  create(data: Hotel): Observable<string> {
    return this.http.post<string>(this.API, data, {responseType: 'text' as 'json'});
  }

  readAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.API);
  }

  update() {}

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.API + "/" + id, {responseType: 'text' as 'json'});
  }

}
