import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team chat';
  signedIn: boolean;

  constructor(private cookieService: CookieService) {
     }

  ngOnInit() {
    this.signedIn = !!this.cookieService.get("user");
  }
}
