import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RoommanagerComponent } from './roommanager/roommanager.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainchatComponent } from './mainchat/mainchat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { MessageService } from './message.service';
import { UserService } from './user.service';
import { PostsService } from './posts.service';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from './logout/logout.component';
import { PostsComponent } from './posts/posts.component';
import { RoomService } from './room.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    RoommanagerComponent,
    UserlistComponent,
    MessagesComponent,
    MainchatComponent,
    LogoutComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    MessageService,
    UserService,
    PostsService,
    CookieService,
    RoomService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
