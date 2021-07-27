import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserServiceService } from '../services/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {

  constructor(private userService: UserServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> {
      const email = route.paramMap.get('email')
      
      return this.userService.getUserByUserEmail(email)
        .pipe(
          tap( // Log the result or error
            (data) => {
              //do nothing with data
            },
            (error) => {
              console.error("ERROR: there was an error: ", error);
            }
          )
        );
  }
}


// (err: any, caught: Observable<Object>) => void
// (err: any, caught: Observable<Object>) => ObservableInput<any>