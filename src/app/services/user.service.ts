import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)

  private API:string = "http://localhost:8080/api/user";

  constructor() { }

  create(obj: User): Observable<User> {
    return this.http.post<User>(this.API, obj);
  }

  readAll(): Observable<User[]> {    
    return this.http.get<User[]>(this.API);
  }

  update(obj: User, id:string): Observable<User> {
    return this.http.patch<User>(this.API + "/" + id, obj);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.API + "/" + id, {responseType: 'text' as 'json'});
  }

}
