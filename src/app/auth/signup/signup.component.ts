import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  latitude: number;
  longitude: number;

  constructor(private authService: AuthService, private router: Router) { }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

  signup(form: NgForm) {
    this.authService.signup(form.value);
    form.reset();
    this.router.navigate(['/market']);
  }

  ngOnInit(): void {
  }

}
