import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-parts-main-page',
  templateUrl: './parts-main-page.component.html',
  styleUrls: ['./parts-main-page.component.css']
})
export class PartsMainPageComponent implements OnInit {
  user: User;
  activeUser: User;

  products: Product[] | any = [];

  constructor(private userService: UserServiceService,
    private productsService: ProductService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.user = this.activeUser

    this.productsService.getAllParts()
      .subscribe(data => {
        this.products = data;
      }, err => {
        console.error(err)

      })
  }

  logout() {
    this.userService.logoutActiveUser();
    this.user = null;
    return
  }



};
