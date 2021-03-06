import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, Subject, throwError } from 'rxjs';

import { HttpClient, } from '@angular/common/http';

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
  public isValid() {
    return JSON.parse(localStorage.getItem('activeUser')) != null;
  }


  public createNewUser(user: User): Observable<any> {
    let body = {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email
    }
    return this.http.post(`${this.baseURL}/user`, body);
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

  public getPastOrders(id: number) {
    return this.http.get(`${this.baseURL}/api/orders/${id}`);
  }

  public details(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/details/${id}`)
  }
  public getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/user/id/${id}`);
  }
  public getUserByUserEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseURL}/api/user/${email}`);
  }

  updateActiveUser() {
    this.getUserById(this.getActiveUser().id).subscribe(
      (data) => {
        localStorage.setItem('activeUser', JSON.stringify(data));
      },
      (error) => {
        console.error('error updating user data in local storage', error);
      }
    );
  }

  public getOrderConfirm(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/user/Confirmed/${id}`)
  }

}
