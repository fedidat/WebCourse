import { Injectable } from '@angular/core';
import { Room } from './room';
import { MessageService } from './message.service'; 

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class RoomService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private userService: UserService) { }

  getRooms (): Observable<Room[]> {
    const url = `${this.serverUrl}/rooms`;
    return this.http.get<Room[]>(url).pipe(
      tap(_ => this.log(`fetched rooms`)),
      catchError(this.handleError('getRooms', []))
    );
  }

  getUserRooms(): Observable<Room[]> {
    var userid: string = this.userService.currentUser;
    const url = `${this.serverUrl}/user/${userid}/rooms`;
    return this.http.get<Room[]>(url).pipe(
      tap(_ => this.log(`fetched user's rooms`)),
      catchError(this.handleError('getUserRooms', []))
    );
  }

  getRoom (id: number): Observable<Room> {
    const url = `${this.serverUrl}/rooms/${id}`;
    return this.http.get<Room>(url).pipe(
      tap(_ => this.log(`fetched room id=${id}`)),
      catchError(this.handleError<Room>(`getRoom id=${id}`))
    );
  }

  getRoomUsers (id: number): Observable<User[]> {
    const url = `${this.serverUrl}/rooms/${id}/users`;
    return this.http.get<User[]>(url).pipe(
      tap(_ => this.log(`fetched room ${id} users`)),
      catchError(this.handleError(`getRoomUsers id=${id}`, []))
    );
  }
    
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private serverUrl: string = "http://localhost:3000";  // URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
