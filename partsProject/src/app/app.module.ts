import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './components/user/user-login/login-form/login-form.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { PartsMainPageComponent } from './components/parts-main-page/parts-main-page.component';
import { EditUserFormComponent } from './components/user/edit-user/edit-user-form/edit-user-form.component';
import { EditUserPageComponent } from './components/user/edit-user/edit-user-page/edit-user-page.component';
import { CreateUserFormComponent } from './components/user/create-user/create-user-form/create-user-form/create-user-form.component';
import { MatIconModule } from '@angular/material/icon';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { ItemCartComponent } from './components/basket/item-cart.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import { SearchComponent } from './components/search/search.component';

import { SearchListComponent } from './components/search-list/search-list.component';

import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartInfoComponent } from './components/cart-info/cart-info.component';
import { TermsComponent } from './components/terms/terms.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ProductpageComponent } from './productpage/productpage.component';
import { SmallListComponent } from './small-list/small-list.component'

@NgModule({
  declarations: [
    AppComponent,
   
    LoginFormComponent,
    PartsMainPageComponent,
    EditUserFormComponent,
    EditUserPageComponent,
    CreateUserFormComponent,
    PartsListComponent,
    ItemCartComponent,
    CartPageComponent,
    PastOrdersComponent,
    

    SearchComponent,

    SearchListComponent,

    OrderDetailsComponent,
    CartInfoComponent,
    TermsComponent,
    OrderConfirmedComponent,
    NotfoundComponent,
    AdminPageComponent,
    
    ProductpageComponent,
         SmallListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
