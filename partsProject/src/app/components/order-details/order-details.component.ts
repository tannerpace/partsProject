import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/orderItem';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input()order
  details:OrderItem

  constructor(public userService:UserServiceService) { }

  ngOnInit(): void {
    
    this.userService.details(this.order)
      .subscribe(data => {
        this.details = data 
      }, err => {
        console.error(err)
        console.log(this.details)

      })
  }
}
 