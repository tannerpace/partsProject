import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {
  user: User;
  confirmedPassword: string;


  constructor(private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    }
    this.user = new User(this.user);
  }

  submit(form: NgForm) {
    console.log("submiting" + NgForm)

    // /^[a-zA-Z0-9_.]*$/.test(this.username)
    // console.log(/^[a-zA-Z0-9_.]*$/.test("!@#%"))

    // if (this.user.password != this.confirmedPassword) {
    //   console.log("password mismatch")
    //   return;

    if (!/^[a-zA-Z0-9_]*$/.test(this.user.firstName)) {
      console.log("invalid firstname")
      return;
    } else if (!/^[a-zA-Z0-9_]*$/.test(this.user.lastName)) {
      console.log("invalid lastname")
      return;
    } else {

      this.userService.createNewUser(this.user)
        .subscribe(
          data => {
            if (!data) {
              console.log("ERROR Create User Failed")
            }
            console.log("New User Created Successfully");
            this.userService.setActiveUser(data);

          },
          error => {
            console.error("ERROR creating user: ", error)
          }
        );
        
        
    }
  }


  // goToMainPage() {
  //   this.router.navigate([""])
  // }

}



