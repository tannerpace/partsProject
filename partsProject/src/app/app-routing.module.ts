import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { PartsMainPageComponent } from './components/parts-main-page/parts-main-page.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { CreateUserFormComponent } from './components/user/create-user/create-user-form/create-user-form/create-user-form.component';
import { SearchComponent } from './components/search/search.component';
import { LoginFormComponent } from './components/user/user-login/login-form/login-form.component';
import { TermsComponent } from './components/terms/terms.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EditUserFormComponent } from './components/user/edit-user/edit-user-form/edit-user-form.component';
import { ForceLoginGuard } from './guards/force-login.guard';
import { AuthUserGuard } from './guards/auth-user.guard';
import { PreloadGuard } from './guards/preload.guard';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ProductpageComponent } from './productpage/productpage.component';



const routes: Routes = [
  // childern used because it parents the main page to all children
  { path: "login", component: LoginFormComponent }, { path: "terms", component: TermsComponent }, { path: "sign", component: CreateUserFormComponent },
  {
    path: "", component: PartsMainPageComponent
  },
  {
    path: "", component: PartsMainPageComponent, canActivate: [ForceLoginGuard], children: [

      { path: "pastOrders", component: PastOrdersComponent },
      { path: "confirmed", component: OrderConfirmedComponent },
      { path: "search", component: SearchComponent },

      { path: "cart", component: CartPageComponent },
      { path: "list", component: ProductpageComponent },
      { path: "admin", component: AdminPageComponent },
      { path: "terms", component: TermsComponent },

      { path: "not_found", component: NotfoundComponent },
      { path: ":userName/edit", component: EditUserFormComponent, resolve: { user: PreloadGuard }, canActivate: [AuthUserGuard] },
    ]
  },
  { path: "**", redirectTo: "not_found" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


