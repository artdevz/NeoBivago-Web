import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)

  private API:string = "http://localhost:8080/api/user";

  constructor() { }

  create(data: User): Observable<string> {
    return this.http.post<string>(this.API, data, {responseType: 'text' as 'json'});
  }

  readAll(): Observable<User[]> {    
    return this.http.get<User[]>(this.API);
  }

  update(data: User, id: string): Observable<string> {
    return this.http.patch<string>(this.API + "/" + id, data, {responseType: 'text' as 'json'});
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.API + "/" + id, {responseType: 'text' as 'json'});
  }

}
