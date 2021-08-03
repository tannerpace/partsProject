import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: any;
  results: any;
  search: String;


  constructor(private userService: UserServiceService,
    private productService: ProductService
  ) { }


  ngOnInit(): void {
    this.productService.getAllParts()
      .subscribe(data => {
        this.results = data as Product[];
      }, err => {
        console.error(err)
      })

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

};



