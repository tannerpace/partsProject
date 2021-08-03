import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownService } from 'src/app/dropdown.service';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-small-list',
  templateUrl: './small-list.component.html',
  styleUrls: ['./small-list.component.css']
})
export class SmallListComponent implements OnInit {
  @Input() product: Product;



  activeUser: User;
  products: Product[];

  constructor(private userService: UserServiceService,
    private productsService: ProductService,
    private dropdownService: DropdownService,
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
  getColor(product) {
    switch (product.color) {
      case 'red':
        return 'indianred';
      case 'green':
        return "limegreen";
      case 'blue':
        return 'lightblue';
      case 'silver':
        return 'silver';
      case 'yellow':
        return 'lightyellow';
      case 'pink':
        return 'hotpink';
      case 'black':
        return 'grey';
      case 'lime':
        return 'lightgreen';
      case 'orange':
        return 'orange';
    }
  }


  deletePart(product) {
    return this.productsService.deletePart(product).subscribe(data => {
      //do nothing with data
      console.log(data)
    })

  }
}
