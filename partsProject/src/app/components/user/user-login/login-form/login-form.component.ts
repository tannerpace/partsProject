import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;


  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }
  goToCreate() {
    this.router.navigate(['/createUser']);
  }

  goToMain() {
    this.router.navigate(['/mainPage']);
  }

  onSubmit(form: NgForm) {
    this.userService.loginUser(this.email, this.password).subscribe(
      (user) => {
        if (!user) {
          console.log('password mismatch');
          //password did not match
          // do something
          return;
        }
        console.log('login successful');

        //user is the user object returned from the DB
        let activeUser = new User(user);
        this.userService.setActiveUser(activeUser);
        this.goToMain();

      },
      (error) => {
        console.error('ERROR loggin in: ', error);
      }
    );
  }

  showPass() {
    var x = <HTMLInputElement>document.getElementById('login');
    if (x.type == 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

 

}
