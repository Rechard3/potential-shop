import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AgGridModule } from 'ag-grid-angular';
import { CartRoutingModule } from "./cart-routing.module";
import { GridModule } from '../core/grid/grid.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CartRoutingModule,
    CommonModule,
    GridModule,
  ]
})
export class CartModule { }
