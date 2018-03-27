import { Component, OnInit } from '@angular/core';

import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-roommanager',
  templateUrl: './roommanager.component.html',
  styleUrls: ['./roommanager.component.css']
})
export class RoommanagerComponent implements OnInit {

  constructor(
    private roomService: RoomService) { }
  
    ngOnInit() {
      this.getRooms();
    }
  
    getRooms(): void {
      this.roomService.getUserRooms()
          .subscribe(rooms => this.rooms = rooms);
    }

    rooms: Room[];
}
