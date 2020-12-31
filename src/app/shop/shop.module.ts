import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ShopComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CoreModule,
  ],
})
export class ShopModule { }
