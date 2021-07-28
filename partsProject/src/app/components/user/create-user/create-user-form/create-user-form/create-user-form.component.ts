import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() toggleForms = new EventEmitter<void>();
  inProgress :Boolean = false

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

  onSubmit(form: NgForm) {
    this.inProgress = true;
    this.userService.createNewUser(this.user)
      .subscribe(
        data => {
          console.log("New User Created Successfully")
          this.Login(data.email, data.password);
        },
        error => {
          console.error("ERROR creating user: ", error)
        }
      )

  }
  toggleForm() {
    this.toggleForms.next();
  }

  goToLogin() {
    this.router.navigate(["/login"])
  }
  toMain() {
    this.router.navigate([""])
  }

  Login(email: string, password: string) {
    this.userService.loginUser(this.user.email, this.user.password).subscribe(
      (user) => {
        if (!user) {
          //password did not match
          alert("The password did not match")
          return;
        }
        //user is the user object returned from the DB
        let activeUser = new User(user);
        this.userService.setActiveUser(activeUser);
        
        setTimeout(() => { this.router.navigate(["/list"]) }, 2000)
        this.inProgress = false;
      },
      (error) => {
        console.error('ERROR loggin in: ', error);
      }
    );
  }


}



