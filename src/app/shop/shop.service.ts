import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from "@angular/common/http";
import { Api } from '../core/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(Api.productList).pipe(map(resp=>resp));
  }
}
