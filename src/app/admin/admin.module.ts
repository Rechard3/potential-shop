import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminStoreModule } from './store/admin.store';



@NgModule({
  declarations: [AdminComponent, AddProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    AdminStoreModule,
  ]
})
export class AdminModule { }
