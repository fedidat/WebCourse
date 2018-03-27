import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Team } from '../team';
import { Room } from '../room';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ngOnInit() {
    this.teamid = this.teams[0].id;
  }

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private userService: UserService) { }

  name: string;
  password: string;
  confirmpassword: string;
  teamid: string;


  rooms: Room[] = [
    new Room(1, "room 1"),
    new Room(2, "room 2"),
    new Room(3, "room 3"),
    new Room(4, "room 4"),
  ];

  users: User[] = [
      new User("user1", "p"),
      new User("user2", "p"),
      new User("user3", "p"),
      new User("user4", "p"),
  ];

  teams: Team[] = [
      new Team("team 1", 
          [this.users[0], this.users[1]],
          [this.rooms[0], this.rooms[1]],
      ),
      new Team("team 2", 
          [this.users[2], this.users[3]],
          [this.rooms[2], this.rooms[3]],
      ),
  ]
  
  /** GET heroes from the server */
  signup (): void {
    this.userService.signup(this.name, this.password, this.teamid)
    .subscribe(res => {
      if(!this.cookieService.get("user")) {
        this.router.navigate(['./signin']);      
      } 
      else {
        this.router.navigate(['./mainchat']);
      }
    });
  }

}
