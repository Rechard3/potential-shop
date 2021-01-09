import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, switchMapTo, tap } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ShopActions } from '../shop/store/shop.actions';
import { ShopState } from '../shop/store/shop.state';

@Injectable({
  providedIn: 'root',
})
export class ProductByIdResolver implements Resolve<Product> {
  /**
   *
   */
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    return this.store.dispatch(new ShopActions.FetchProducts()).pipe(
      switchMapTo(this.store.select(ShopState.productsList)),
      filter(prods=>prods && Array.isArray(prods) && prods.length>0),
      first(),
      map((prods) => prods.find((p) => p._id == route.params['id'])),
      map((prod) => prod),
    )
  }
}
