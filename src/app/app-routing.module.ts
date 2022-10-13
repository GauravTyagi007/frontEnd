import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddItemsComponent } from './add-items/add-items.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FinalizedOrderDetailsComponent } from './finalized-order-details/finalized-order-details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { BranchComponent } from './branch/branch.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'cards', component: CardsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'orders', component: OrderDetailsComponent },
      { path: 'add-order', component: AddOrderComponent },
      { path: 'add_item', component: AddItemsComponent },
      { path: 'items', component: ItemDetailsComponent },
      { path: 'menu', component: AddMenuComponent },
      { path: 'finalized_order', component: FinalizedOrderDetailsComponent },
      {path:"add_products",component:AddProductsComponent},
      {path:"staff",component:StaffComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
