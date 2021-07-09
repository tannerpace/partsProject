import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseURL: string = "http://localhost:8080";
  product:Product

  constructor(private http: HttpClient) { }

  getAllParts() {
    return this.http.get(`${this.baseURL}/api/products`);
  }
}
