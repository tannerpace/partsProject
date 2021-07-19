import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  @Input() activeUser: User;
  cart: any[];
  howmany: number


  public subtotal: number = 0;
  public totalPrice: number;



  constructor(private checkOutService: CheckoutService,
    private userService: UserServiceService,
    private productService: ProductService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.checkOutService.getCartByUserId(this.activeUser.id)
      .subscribe(data => {
        this.cart = data;
        //then calc the total price
        this.subtotal = 0;
        for (let i = 0; i < this.cart.length; i++) {
        }
        //loop cart array price times quantity
        this.cart.forEach(i => { this.subtotal += i.price * i.quantity })

        // for (let item of this.cart) {
        //   this.subtotal += item.price * item.quantity;
        //   this.total
        // }
        this.totalPrice = this.subtotal * 1.06;
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
  }

  buyAll(userId: number, totalPrice: number,) {
    console.log("BUY!ALL")
    console.log(userId, totalPrice)

    // do something here
    // POST a new 'past order'
    this.checkOutService.buyAll(userId, totalPrice)
      .subscribe(data => {
        this.productService.deleteItemById(userId).subscribe()
        //nav away
      }, err => {
        console.error(err)
      })

    // DELETE items from cart (WHERE userID = ?)
    // remove all items from cart
    // go to "purchase confirmed page" - or the 'past orders' page

  }


  removeItem(item: any) {
    console.log(item)
    this.productService.deleteItemById(item.id)
  }

  goToOrderedPage() {
    // this.route.navigate
  }

};
