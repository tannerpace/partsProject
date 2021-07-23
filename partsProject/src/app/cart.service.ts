import { Injectable } from '@angular/core';

import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public readonly baseURL: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public deleteItemById(id: number) :Observable<any>{
    console.log("cart service deleting!", id)
    console.log((`${this.baseURL}/api/deleteItem/${id}`))
    return this.http.delete(`${this.baseURL}/api/deleteItem/${id}`);
  }


}