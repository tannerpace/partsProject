import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  products: Product[];
  activeUser: User;


  constructor(private userService: UserServiceService,
    private productsService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

    this.activeUser = this.userService.getActiveUser();

    this.productsService.getAllParts()
      .subscribe(data => {
        this.products = data as Product[];
      }, err => {
        console.error(err)

      })
  }

  addItem(product: Product) {
    this.productsService.addItem(this.activeUser.id, product.partNumber)
      .subscribe(data => {
        //item added successfully
        //route away to cart
        this.router.navigate(["cart"])
      }, err => {
        console.error("ERROR:", err)
      });
  }

}
