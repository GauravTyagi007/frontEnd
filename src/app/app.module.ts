import { NgModule } from '@angular/core';
import {NgxPrintModule} from 'ngx-print';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddItemsComponent } from './add-items/add-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { SettingsComponent } from './settings/settings.component';
import { FinalizedOrderDetailsComponent } from './finalized-order-details/finalized-order-details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { BranchComponent } from './branch/branch.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent,
    AddOrderComponent,
    OrderDetailsComponent,
    AddItemsComponent,
    ItemDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    CardsComponent,
    SettingsComponent,
    FinalizedOrderDetailsComponent,
    AddProductsComponent,
    BranchComponent,
    StaffComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxPrintModule , FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
