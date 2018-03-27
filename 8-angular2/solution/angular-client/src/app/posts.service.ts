import { Component, OnInit, Input } from '@angular/core';

import { Injectable } from '@angular/core';
import { MessageService } from './message.service'; 

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Message } from './message';
import * as io from 'socket.io-client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsService {
  private serverUrl: string = "http://localhost:3000";  // URL to web api
  private socket;

  sendMessage (message: Message): void {
    this.socket.emit('server-message', message);
  }

  getMessages(roomid: number): Observable<Message> {
    let observable = new Observable(observer => {
      this.socket = io.connect(this.serverUrl, {query: `roomid=${roomid}`});
      this.socket.on('client-message', (data) => {
        observer.next(data);    
      });
      this.socket.on('user connect event', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };
    })     
    return <Observable<Message>>observable;
  }

  constructor() {
  }
}
