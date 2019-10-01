import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCardComponent,
    CustomerNewComponent,
    RepDialogComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    CustomersRoutingModule
  ],
  entryComponents: [
    RepDialogComponent
  ]
})
export class CustomersModule { }
