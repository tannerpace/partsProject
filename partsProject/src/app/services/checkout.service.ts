import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  getUserCartItems(id: number) {
    throw new Error('Method not implemented.');
  }
  private readonly baseURL: string = "http://localhost:8080";
  product: Product
  constructor(private http: HttpClient) { }

  getCartByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/checkout/${userId}`)
  }

  public buyAll(userId: number, totalPrice: number): Observable<any> {
    let body = {
      userId: userId,
      totalPrice: totalPrice
    }
    return this.http.put(`${this.baseURL}/api/checkout`, body)

  }

  public getLast(): Observable<any> {
    return this.http.get(`${this.baseURL}/api/what/lastinsert`)
  }

  public updateOrderItems(lastInsert:number,partNumber:string,quantity:number): Observable<any> {
    let body = {
      lastInsert: lastInsert,
      partNumber: partNumber,
      quantity: quantity
    }
    return this.http.put(`${this.baseURL}/api/orderItems`, body)
  }

};
