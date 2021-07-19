import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user.model';

import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {
  @Input() activeUser: User;
  
orders: Order[];
  

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.userService.getPastOrders(this.activeUser.id)
      .subscribe(data => {
        this.orders = data as Order[];
      }, err => {
        console.error(err)

      })
  }

  

}
