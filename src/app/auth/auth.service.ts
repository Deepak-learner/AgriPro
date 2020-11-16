import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Product } from '../market/market.model';
import { User } from './user.model';


@Injectable({ providedIn: 'root' })
export class AuthService{

  user: User = null;
  isLogged = false;

  constructor(private http: HttpClient) {}

  signup(user: User) {
    this.http.post("https://agripro-d4890.firebaseio.com/users.json", user)
    .subscribe((responseData) => {
      console.log(responseData);
      this.isLogged = true;
      this.user = user;
      this.user.id = responseData[name];
      console.log(this.user);
      this.isLogged = true;
    });
  }

  login(user: User) {
    this.user = user;
    this.isLogged = true;
  }

  logout() {
    this.user = null;
    this.isLogged = false;
  }

}
