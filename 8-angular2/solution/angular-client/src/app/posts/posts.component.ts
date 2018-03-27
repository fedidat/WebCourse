import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../room';
import { Message, EventType } from '../message';
import { PostsService } from '../posts.service';
import { UserService } from '../user.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  private room :Room;
  private messages: Message[] = [];
  private connection;
  private roomid;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private postsService: PostsService,
    private userService: UserService,
  ) { }

  sendMessage(messageBody: string): void {
    var message: Message = new Message(
      this.room, EventType.message, 
      this.userService.currentUser, messageBody);
    this.postsService.sendMessage(message);
    this.messages.push(message);
  }

  ngOnInit(): void {
    this.getRoom();
    this.connection = this.postsService.getMessages(this.roomid)
      .subscribe(message => {
        if(message instanceof Message) {
          switch(message.eventType) {
            case EventType.message:
              if(message.room.id === this.room.id)
                this.messages.push(<Message>message);
              break;
            case EventType.connect:
            case EventType.disconnect:
          }
        }
      });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getRoom(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomid = id;
    this.roomService.getRoom(id)
      .subscribe(room => this.room = room);
  }
}
