import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ShopState } from './shop.state';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxsModule.forFeature([ShopState])],
  exports: [NgxsModule],
})
export class StoreModule {}
