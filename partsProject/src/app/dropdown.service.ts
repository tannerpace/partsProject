import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }
  color =['blue','red','black','silver'];
  category=['wheel','engine','suspension','seat','body','cloths','electrical']
}
