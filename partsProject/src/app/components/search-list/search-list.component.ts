import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() products: Product[];
  public activeUser: User;
  constructor(private userService: UserServiceService,
     private productsService: ProductService,
     private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
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

