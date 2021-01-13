import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, debounceTime, delay, map, switchMap, tap } from 'rxjs/operators';
import { Order } from 'src/app/models/order.model';
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

  @Select(ShopState.selectedOrder) cartItems: Observable<
    (Product & { quantity: number; total: number })[]
  >;

  @Select(ShopState.orders) orders: Observable<Order[]>;
  bottomRow: Observable<any>;

  ngOnInit(): void {
    this.store.dispatch([
      new ShopActions.FetchCart(),
      new ShopActions.FetchOrders(),
    ]);
    this.bottomRow = this.cartItems.pipe(
      map((data) => ({
        data,
        processed: [
          (data || []).reduce(
            (acc, curr) => {
              const total = acc['total'] + curr['price'] * curr['quantity'];
              return { total, buttonHidden: true };
            },
            {
              total: 0,
            }
          ),
        ],
      })),
      map(({ data, processed }) => (data ? processed : null))
    );
  }

  ngAfterViewInit() {
    const sub = this.cartItems.pipe(debounceTime(50)).subscribe((data) => {
      if (data) {
        this.gridDef.gridOptions.api.hideOverlay();
        console.log('hiding loading overlay');
      } else {
        this.gridDef.gridOptions.api.showLoadingOverlay();
        console.log('showing loading overlay');
      }
    });
    this.subscriptions.add(sub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  purchaseCart() {
    this.store.dispatch(new ShopActions.OrderCart());
  }

  getOrderCost(order: Order){
    return (order.items || []).reduce((acc, curr)=>acc + curr.product.price*curr.quantity, 0);
  }
}
