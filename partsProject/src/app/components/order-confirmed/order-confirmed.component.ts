import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderItem } from 'src/app/models/orderItem';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {



  orderDetails: any;

  activeUser: User;

  orders: Order[];
  order;
  details: OrderItem



  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.userService.getPastOrders(this.activeUser.id)
      .subscribe(data => {
        this.orders = data as Order[];

        this.order = this.orders[this.orders.length - 1]
        console.log(this.order.totalPrice)
        return this.order;

      }, err => {
        console.error(err)

      })
    this.userService.details(this.order.id).subscribe(data => {
      this.details = data;


    })

  }

  // details(id: number) {
  //   return this.userService.details(id).subscribe(data => {
  //     this.orderDetails = data
  //     console.log(this.orderDetails)
  //   })
  // }



}


