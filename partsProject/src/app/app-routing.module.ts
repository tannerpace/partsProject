import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsMainPageComponent } from './components/parts-main-page/parts-main-page.component';
import { CreateUserPageComponent } from './components/user/create-user/create-user-page/create-user-page.component';
import { EditUserPageComponent } from './components/user/edit-user/edit-user-page/edit-user-page.component';
import { LoginPageComponent } from './components/user/user-login/login-page/login-page.component';

const routes: Routes = [
  
  {path: "login", component: LoginPageComponent},
  {path: "createUser",component: CreateUserPageComponent},
  {path: "editUser",component: EditUserPageComponent},
  {path: "mainPage",component: PartsMainPageComponent},
 
  
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


