import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = null;
  isLogged = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.isLogged = this.authService.isLogged;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isLogged = false;
    this.user = null;
  }

}
