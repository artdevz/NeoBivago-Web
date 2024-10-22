import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Login } from "./Login";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    http = inject(HttpClient);

    private API:string = "http://localhost:8080/api/auth";

    constructor() {}

    signIn(data: Login): Observable<any> {
        return this.http.post<any>(this.API + "/signin", data, {responseType: 'text' as 'json'});
    }

}