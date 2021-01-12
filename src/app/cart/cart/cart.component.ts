import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { debounceTime, delay, map, switchMap, tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ShopActions } from 'src/app/shop/store/shop.actions';
import { ShopState } from 'src/app/shop/store/shop.state';
import { CartGridService } from './cart.grid';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(public gridDef: CartGridService, private store: Store) {}

  subscriptions = new Subscription();

  @Select(ShopState.cart) cartItems: Observable<
    (Product & { quantity: number; total: number })[]
  >;
  bottomRow: Observable<any>;

  ngOnInit(): void {
    this.store.dispatch(new ShopActions.FetchCart());
    this.bottomRow = this.cartItems.pipe(
      map((data) => ({data, processed: [
        (data || []).reduce(
          (acc, curr) => {
            const total = acc['total'] + curr['price'] * curr['quantity'];
            return { total, buttonHidden: true };
          },
          {
            total: 0,
          }
        ),
      ]})),
      map(({data, processed})=> data ? processed : null)
    );
  }

  ngAfterViewInit() {
    const sub = this.cartItems.pipe(debounceTime(50)).subscribe((data) => {
      if (data) {
        this.gridDef.gridOptions.api.hideOverlay();
        console.log('hiding loading overlay');
      } else {
        this.gridDef.gridOptions.api.showLoadingOverlay();
        console.log("showing loading overlay");
      }
    });
    this.subscriptions.add(sub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
