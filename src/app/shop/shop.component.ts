import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ShopActions } from "./store/shop.actions";
import { ShopState } from './store/shop.state';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @Select(ShopState.productsList) products: Observable<Product[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new ShopActions.FetchProducts());
  }
}
