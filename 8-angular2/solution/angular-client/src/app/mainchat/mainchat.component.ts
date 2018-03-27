import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mainchat',
  templateUrl: './mainchat.component.html',
  styleUrls: ['./mainchat.component.css']
})
export class MainchatComponent implements OnInit {

  constructor(private router: Router,
    private cookieService: CookieService) {
     }

  ngOnInit() {
    if(!this.cookieService.get("user")) {
      this.router.navigate(['./signin']);      
    }
  }

}
