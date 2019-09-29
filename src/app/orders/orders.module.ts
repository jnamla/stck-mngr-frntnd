import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { AppSharedModule } from '../app-shared/app-shared.module';

@NgModule({
  declarations: [ OrderListComponent, OrderNewComponent ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AppSharedModule
  ]
})
export class OrdersModule { }
