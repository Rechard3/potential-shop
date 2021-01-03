import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { CoreModule } from '../core/core.module';
import { StoreModule } from './store/store.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ShopComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CoreModule,
    StoreModule,
    FlexLayoutModule,
  ],
})
export class ShopModule { }
