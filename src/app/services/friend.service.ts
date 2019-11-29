import { Friend } from '../friend.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  baseurl = 'http://localhost:2000';

  friendSelected = new EventEmitter<Friend>();

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  // PUT
  addMsg(id, friend): Observable<Friend> {
    return this.httpclient.put<Friend>(this.baseurl + '/friends/' +  + id, JSON.stringify(friend), this.httpOptions).pipe(
      retry(2),
      catchError(this.errorHandl)
    );

  }


    // GET
    // GetFriend(id): Observable<Friend> {
    //   return this.httpclient.get<Friend>(this.baseurl + '/friends/' + id)
    //   .pipe(
    //     retry(2),
    //     catchError(this.errorHandl)
    //   );
    // }

    // GET
    GetFriends(): Observable<Friend[]> {
      return this.httpclient.get<Friend[]>(this.baseurl + '/friends/')
      .pipe(
        retry(2),
        catchError(this.errorHandl)
      );
    }

    // DELETE
    // DeleteFriend(id) {
    //   return this.httpclient.delete<Friend>(this.baseurl + '/friends/' + id, this.httpOptions)
    //   .pipe(
    //     retry(2),
    //     catchError(this.errorHandl)
    //   );
    // }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
