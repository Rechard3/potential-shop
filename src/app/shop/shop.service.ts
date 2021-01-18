import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Api } from '../core/api';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ld } from '../core/utils/lodash.exports';
import produce from 'immer';
import { RequestService } from '../core/utils/request.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient, private request: RequestService) {}

  /** request the list of available products */
  fetchProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(Api.productList).pipe(map((resp) => resp));
    return this.request
      .get(Api.productList)
      .dispatch()
      .pipe(
        map((resp) => resp.data),
        catchError((err) => {
          console.log('an error occured while fetching the products list');
          throwError(err);
          return null;
        })
      );
  }

  /** request deleting a product from the list of products available in the shop */
  removeProduct(payload: Product) {
    return this.http.post(Api.productDelete, payload).pipe(
      catchError((err: HttpResponseBase) => {
        if (err.status == 200) {
          return [];
        } else {
          throw err;
        }
      })
    );
  }

  /** fetch the current user cart */
  fetchCart() {
    return this.request.get(Api.cartList).dispatch();
  }

  /** add a product to the user cart */
  addProductToCart(product: Product) {
    return this.http.post(Api.cartAddProduct, { id: product['_id'] });
  }

  /** remove some quantity of a product from the user cart */
  removeProductFromCart(product: Product, quantity: number) {
    return this.http.post(Api.cartRemoveProduct, { id: product._id, quantity });
  }

  /** send a request to confirm buying the current cart */
  confirmCartOrder() {
    return this.http.post(Api.orderCart, {});
  }

  fetchAllOrders() {
    return this.http.get(Api.orderFetchAll);
  }
}
