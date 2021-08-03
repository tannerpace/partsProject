import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownService } from 'src/app/dropdown.service';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-parts-main-page',
  templateUrl: './parts-main-page.component.html',
  styleUrls: ['./parts-main-page.component.scss']
})
export class PartsMainPageComponent implements OnInit {
  user: User;
  activeUser: User;
  products: Product[] | any = [];

  constructor(private userService: UserServiceService,
    private router: Router,
    public dropdownService: DropdownService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
    this.user = this.activeUser
    this.userService.setActiveUser(this.user
    )
  }



  goToCreate() {
    this.router.navigate(['/createUser']);
  }

  logout() {
    this.userService.logoutActiveUser();
    this.user = null;
    this.toLogin()
  }

  toLogin() {
    this.router.navigate(['login']);
  }
};
