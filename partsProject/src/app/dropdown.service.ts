import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }
  reset = []
  color = ['blue', 'red', 'black', 'silver', 'orange', 'limegreen', 'green', 'pink'];
  category = ['Exterior', 'Engine', 'Suspension', 'Wheel', 'Clothes', 'Light']
}
