import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseURL: string = "http://localhost:8080";
  product: Product

  constructor(private http: HttpClient) { }

  public getAllParts(): Observable<any> {
    return this.http.get(`${this.baseURL}/api/products`);
  }

  public addItem(userId: number, partNumber: string): Observable<any> {
    let body = {
      userId: userId,
      partNumber: partNumber,
    };
    return this.http.put(`${this.baseURL}/api/cartadd`, body)
  }

  public getUserCartItems(userId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/cart/${userId}`)
  }

  public changeQuantity(item: number): Observable<any> {
    return this.http.put(`${this.baseURL}/api/cart/changeQuantity`, item)
  }
  // deletes all Items in cart By user id, required for checkout service
  public deleteItemById(userId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/api/product/${userId}`)
  }

  //route is
  ///api/search
  public searchProducts(data): Observable<any> {
    return this.http.get(`${this.baseURL}/api/products/search/${data}`)
  }

}
