import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  activeUser: any;
  product: Product;

  constructor(private productService: ProductService,
    private userService: UserServiceService,

    private router: Router,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.product = {
      partNumber: '',
      PrimaryVendor: '',
      color: '',
      partName: '',
      price: '',
      Category: '',
      img: ''
    }
    this.product = new Product(this.product);

  }

  onSubmit(form: NgForm) {
    console.log("adding a prt")
    this.productService.addNewPart(this.product)
      .subscribe(
        data => {
          console.log("New Part Created Successfully")

        },
        error => {
          console.error("ERROR creating user: ", error)
        }
      )
  }
}
