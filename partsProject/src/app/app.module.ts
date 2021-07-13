import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/user/user-login/login-page/login-page.component';
import { LoginFormComponent } from './components/user/user-login/login-form/login-form.component';

import { PartsMainPageComponent } from './components/parts-main-page/parts-main-page.component';
import { EditUserFormComponent } from './components/user/edit-user/edit-user-form/edit-user-form.component';
import { EditUserPageComponent } from './components/user/edit-user/edit-user-page/edit-user-page.component';
import { CreateUserPageComponent } from './components/user/create-user/create-user-page/create-user-page.component';
import { CreateUserFormComponent } from './components/user/create-user/create-user-form/create-user-form/create-user-form.component';
import { MatIconModule } from '@angular/material/icon';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { ItemCartComponent } from './components/item-cart/item-cart.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    PartsMainPageComponent,
    EditUserFormComponent,
    EditUserPageComponent,
    CreateUserPageComponent,
    CreateUserFormComponent,
    PartsListComponent,
    ItemCartComponent,
    CartPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
