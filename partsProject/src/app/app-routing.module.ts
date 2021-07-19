import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { PartsMainPageComponent } from './components/parts-main-page/parts-main-page.component';
import { EditUserPageComponent } from './components/user/edit-user/edit-user-page/edit-user-page.component';
import { LoginPageComponent } from './components/user/user-login/login-page/login-page.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { CreateUserFormComponent } from './components/user/create-user/create-user-form/create-user-form/create-user-form.component';

const routes: Routes = [
  
  {path: "login", component: LoginPageComponent},
  {path: "createUser",component: CreateUserFormComponent},

  {path: "",component: PartsMainPageComponent, children: [
    {path: "",component: PartsListComponent},
    {path: "cart",component: CartPageComponent},
    {path: "pastOrders", component: PastOrdersComponent}
    // ** order confirmed **
  ]},
  
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


