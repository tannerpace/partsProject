import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {
  activeUser: any;
  orders: any[];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.userService.getPastOrders(this.activeUser.id)
      .subscribe(data => {
        this.orders = data as any[];
      }, err => {
        console.error(err)

      })
  }

}
