import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  @Input() activeUser: User;
  cart: any[];
  howmany:number
  
  public subtotal: number = 0;
  public totalPrice: number;

  constructor(private checkOutService: CheckoutService, 
    private userService: UserServiceService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.checkOutService.getCartByUserId(this.activeUser.id)
      .subscribe(data => {
        this.cart = data;
        //then calc the total price
        this.subtotal = 0;
        // for (let i = 0; i < this.cart.length; i++) {
        // }
        //loop cart array price times quantity
        this.cart.forEach(i => {this.subtotal += i.price * i.quantity})

        for(let item of this.cart) {
          this.subtotal += item.price * item.quantity;
        }
        this.totalPrice = this.subtotal * 1.06;
      }, err => {
        console.error(err)

      })

  }

  
  changeQuantity(item: any) {
    // look at item id, get quantity (already updated)
      // send a request to change the quantity to that value
      if(item.quantity < 1) {
        // remove the item from the cart
      }
      console.log(item)
  }

  purchaseCart() {
    // do something here
    // add date to the 'past orders' table
    // remove all items from cart
    // go to "purchase confirmed page" - or the 'past orders' page
  }

};
