import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { RoomService } from '../room.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserlistComponent implements OnInit {
  private currentUser: string;
  private users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUsers();
    setInterval(() => { 
        this.getUsers(); 
    }, 5000);
    this.currentUser = this.userService.currentUser;
  }
  
  getUsers(): void {
    const roomid = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoomUsers(roomid)
      .subscribe(users => {
        this.users = users;
      });
  }

}
