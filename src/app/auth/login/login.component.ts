import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  users: User[] = [];

  login(form: NgForm) {
    console.log(form);
    console.log(this.users);
    for( const user of this.users) {
      if(user.email===form.value.email && user.password===form.value.password) {
        this.authService.login(user);
        this.router.navigate(['/market']);
        break;
      }
    }



  }

  ngOnInit(): void {
    this.http.get<{ [key: string]: User }>('https://agripro-d4890.firebaseio.com/users.json')
    .pipe(map(responseData => {
      const productsArray: User[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          productsArray.push({...responseData[key], id: key});
        }
      }
      return productsArray;
    })
    )
    .subscribe((responseData) => {
      this.users = responseData;
    });
  }

}
