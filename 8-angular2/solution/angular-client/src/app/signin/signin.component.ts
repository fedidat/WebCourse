import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  ngOnInit() {
    if(this.cookieService.get("user")) {
      this.router.navigate(['./mainchat']);  
    }
  }

  constructor(private userService: UserService,
    private router: Router,
    private cookieService: CookieService) { }

  name: string;
  password: string;

  /** GET heroes from the server */
  signin (): void {
    this.userService.signin(this.name, this.password)
      .subscribe(res => {
        this.router.navigate(['./mainchat']);
      });
  }
}
