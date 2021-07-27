import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ForceLoginGuard implements CanActivate {
  constructor(private userService: UserServiceService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isValid()) {
      // console.log("log in validated")
      return true;
    } else {
      // console.log("forcing login")
      this.router.navigate(['login']);
      return false;
    }
  }
  
}