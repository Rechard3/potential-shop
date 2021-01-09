import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductForm } from './forms/product-form';
import { FormsModule } from '../core/forms/forms.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    FormsModule,
    AgGridModule,
  ],
  providers: [ProductForm],
})
export class AdminModule {}
