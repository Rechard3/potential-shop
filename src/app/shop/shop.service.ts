import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Api } from '../core/api';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ld } from '../core/utils/lodash.exports';
import produce from 'immer';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Api.productList).pipe(map((resp) => resp));
  }

  removeProduct(payload: Product) {
    return this.http
      .post(Api.productDelete, payload)
      .pipe(catchError((err: HttpResponseBase)=>{
        if(err.status == 200){
          return [];
        }else{
          throw err;
        }
      }));
  }


  fetchCart(){
    return this.http.get(Api.cartList);
  }

  addProductToCart(product: Product){
    return this.http.post(Api.cartAddProduct, {id: product['_id']});
  }
}
