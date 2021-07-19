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

  public getActiveUser(): User {
    let user: User = JSON.parse(localStorage.getItem('activeUser'));
    if (user) {
      // logged in so return the user
      return user;
    }
    return null;
  }

  public createNewUser(newUser: User): Observable<any> {
    return this.http.post(`${this.baseURL}/user`, newUser);
  }

  public editUserInfo(id: number, updatedUserData: User): Observable<any> {
    return this.http.put(`${this.baseURL}/user/${id}`, updatedUserData);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/user${id}`)
  }

  public setActiveUser(user: User) {
    localStorage.setItem('activeUser', JSON.stringify(user));
    this.newActiveUser$.next(user);
  }

  public loginUser(email: string, password: string) {
    let body = {
      email: email,
      password: password,
    };
    return this.http.post(`${this.baseURL}/user/login`, body);
  }

  public logoutActiveUser() {
    localStorage.removeItem('activeUser');
  }

  public getPastOrders(id: number) :Observable<any>{
    return this.http.get(`${this.baseURL}/api/orders/${id}`);
  }

}
