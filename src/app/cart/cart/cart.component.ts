import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EMPTY, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ShopActions } from 'src/app/shop/store/shop.actions';
import { ShopState } from 'src/app/shop/store/shop.state';
import { CartGridService } from './cart.grid';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit {
  constructor(public gridDef: CartGridService, private store: Store) {}

  @Select(ShopState.cart) cartItems: Observable<
    (Product & { quantity: number; total: number })[]
  >;
  bottomRow: Observable<any>;

  ngOnInit(): void {
    this.store.dispatch(new ShopActions.FetchCart());
    this.bottomRow = this.cartItems.pipe(
      map((data) => [
        data.reduce(
          (acc, curr) => {
            const total = acc['total'] + curr['price'] * curr['quantity'];
            return { total };
          },
          {
            total: 0,
          }
        ),
      ]),
      map(([data])=>([{...data, buttonHidden: true}])),
    );
  }

  ngAfterViewInit(){}
}
