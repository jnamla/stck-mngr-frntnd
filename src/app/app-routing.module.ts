import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    //loadChildren: './orders/orders.module#OrdersModule'
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule) 
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
