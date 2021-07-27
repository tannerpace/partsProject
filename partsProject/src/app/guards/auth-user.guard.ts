import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { UserServiceService } from '../services/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {

  constructor(public router: Router,
    public userService: UserServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean {

    const email = route.paramMap.get('email');
    if (!this.isAuthenticated(email)) {
      this.router.navigate([email]);
      return false;
    } else {
      return true;
    }
  }
  
  public isAuthenticated(email: string): boolean {
    // the signed in user is allowed to access their own pages
    return email == this.userService.getActiveUser().email;
  }
  
}