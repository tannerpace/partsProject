import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private readonly baseURL: string = "http://localhost:8080";
  activeUser: User;

  public newActiveUser$: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  public createNewUser(newUser: User): Observable<any> {
    return this.http.post(`${this.baseURL}/user`, newUser);
  }

  public editUserInfo(id: number, updatedUserData: User): Observable<any> {
    return this.http.put(`${this.baseURL}/user/${id}`, updatedUserData);
  }

  public deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/user${id}`)
  }

  public setActiveUser(user: User) {
    localStorage.setItem('activeUser', JSON.stringify(user));
    this.newActiveUser$.next(user);
  }

  public logoutActiveUser() {
    localStorage.removeItem('activeUser');
  }

}
