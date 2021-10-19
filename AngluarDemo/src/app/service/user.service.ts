import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://reqres.in/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsers(): Observable<User[]>{
    return this.http.get<any>(this.apiURL+"users?page=2").pipe(
      map((response) => {
        return response.data;
      }),
      catchError(async (error) => console.log('ERROR: ', error))
    );
  }

}
