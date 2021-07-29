import { Component, Input,  OnInit, Output } from '@angular/core';
import {  Router  } from '@angular/router';


import { CartService } from 'src/app/cart.service';

import { User } from 'src/app/models/user.model';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  @Input() activeUser: User;
  @Output() public subtotal: any = 0;
  @Output() public totalPrice: number;

  cart: any[];

  constructor(private checkOutService: CheckoutService,
    private userService: UserServiceService,
    private productService: ProductService,
    private router: Router,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.checkOutService.getCartByUserId(this.activeUser.id)
      .subscribe(data => {
        this.cart = data;
        this.subtotal = 0;
        //calc the total price
        this.cart.forEach(element => { this.subtotal += element.price * element.quantity })
        this.totalPrice = this.subtotal * 1.06;
        console.log(this.totalPrice)
      }, err => {
        console.error(err)
      })
  }

  changeQuantity(item: any) {
    // look at item id, get quantity (already updated)
    // if negative, round up to 1
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    //always, round down
    item.quantity = Math.floor(item.quantity);
    // send a request to change the quantity to that value
    this.productService.changeQuantity(item)
      .subscribe(data => {
        //quantity updated successfully
      }, err => {
        // error updating quantity
        console.error("ERROR updating quantity of item", err, item);
      });
    this.ngOnInit()
  }

  buyAll(userId: number, totalPrice: number,) {
    this.checkOutService.buyAll(userId, totalPrice)
      .subscribe(data => {
        
      }, err => {
        console.error(err)
      })
      setTimeout(()=>{
        this.router.navigate(["/confirmed"])
      },2000)
  }

  deleteItemById(item: any) {
    let id = item.id
    console.log("cart page ts deletinG!", id)
    this.cartService.deleteItemById(id).subscribe()
    this.ngOnInit()
  }

  goToList(){
    this.router.navigate(["list"])
  }

};
