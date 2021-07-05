import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsMainPageComponent } from './components/parts-main-page/parts-main-page.component';
import { LoginPageComponent } from './components/user/user-login/login-page/login-page.component';

const routes: Routes = [
  {path: "", component: PartsMainPageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


