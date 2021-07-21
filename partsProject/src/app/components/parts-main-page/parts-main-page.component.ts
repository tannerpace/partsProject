import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private productsService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.user = this.activeUser
    this.userService.setActiveUser(this.user
    )
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  goToCreate() {
    this.router.navigate(['/createUser']);
  }

  logout() {
    this.userService.logoutActiveUser();
    this.user = null;
    this.toLogin()
  }
};
