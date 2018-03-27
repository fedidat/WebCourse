import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieService.delete("user");
    this.router.navigate(['/signin']);
  }

}
