import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit{
  @Input() activeUser: User;
  items: Item[];

  constructor(private userService: UserServiceService,
    private productsService: ProductService) { }


  ngOnInit(): void {

    this.activeUser = this.userService.getActiveUser();

    this.productsService.getUserCartItems(this.activeUser.id)
      .subscribe(data => {
        this.items = data as Item[];
      }, err => {
        console.error(err)

      })
  }

  

  

}
