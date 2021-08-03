import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownService } from '../dropdown.service';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { ProductService } from '../services/product.service';
import { UserServiceService } from '../services/user-service.service';
import { SmallListComponent } from '../small-list/small-list.component';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
  color;
  category;
  products: Product[];
  activeUser: User;
  product: Product;
  search: String;
  public selectedColor;
  public selectedCategory;



  results: Product[];

  constructor(private userService: UserServiceService,
    private productService: ProductService,
    private dropdownService: DropdownService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.productService.getAllParts()
      .subscribe(data => {
        this.products = data as Product[];
      }, err => {
        console.error(err)
      })
    this.color = this.dropdownService.color;
    this.category = this.dropdownService.category;
  }



  public colorSelected() {
    this.productService.getAllParts()
      .subscribe(data => {
        this.products = data as Product[];
        this.products = this.products.filter(product => product.color === this.selectedColor)
      }, err => {
        console.error(err)
      })
  }


  public categorySelected() {
    this.productService.getAllParts()
      .subscribe(data => {
        this.products = data as Product[];
        this.products = this.products.filter(product => product.Category === this.selectedCategory)
      }, err => {
        console.error(err)
      })
  }

  addItem(product: Product) {
    this.productService.addItem(this.activeUser.id, product.partNumber)
      .subscribe(data => {
        //item added successfully
        //route away to cart
        this.router.navigate(["cart"])
      }, err => {
        console.error("ERROR:", err)
      });
  }

  searchProducts(event) {
    this.search = event.target.value
    this.productService.searchProducts(this.search).subscribe((res) => {
      console.log(res)
      if (res) {
        this.products = res
        if (res.length === 0) {
          console.error("no data")
        }
      }
    },
      (err) => {
        console.log(err);
        console.log("error")
      })

    this.results = this.products;
    console.log(this.results)
    return this.results;
  }

  resetProduct() {
    this.productService.getAllParts()
      .subscribe(data => {
        this.products = data as Product[];
      }, err => {
        console.error(err)
      })
    this.color = this.dropdownService.color[0];
    this.category = this.dropdownService.category[0];

  }
}
