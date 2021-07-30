import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownService } from '../dropdown.service';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { ProductService } from '../services/product.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  catagory 
  products: Product[];
  activeUser: User;
 
  color: string[];

  constructor(private userService: UserServiceService,
    private productsService: ProductService,
    private dropdownService: DropdownService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.productsService.getAllParts()
      .subscribe(data => {
        this.products = data as Product[];
      }, err => {
        console.error(err)
      })
    this.color = this.dropdownService.color;
  }


  public selectedColor;
  public colorSelected() {
    this.productsService.getAllParts()
      .subscribe(data => {
        this.products = data as Product[];
        this.products = this.products.filter(  product => product.color === this.selectedColor)
      }, err => {
        console.error(err)
      })
   
  }
}
