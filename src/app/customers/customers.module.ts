import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { AppSharedModule } from '../app-shared/app-shared.module';

@NgModule({
  declarations: [CustomerListComponent, CustomerCardComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    AppSharedModule
  ]
})
export class CustomersModule { }
