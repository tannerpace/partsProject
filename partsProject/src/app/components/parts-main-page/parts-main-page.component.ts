import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-parts-main-page',
  templateUrl: './parts-main-page.component.html',
  styleUrls: ['./parts-main-page.component.css']
})
export class PartsMainPageComponent implements OnInit {
  user: User;
  activeUser: User;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();

  }

  logout(){
   return this.userService.logoutActiveUser();
  }



};
