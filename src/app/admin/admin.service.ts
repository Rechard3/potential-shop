import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Api } from '../core/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addNewProduct(product: Product){
    return this.http.post<Product>(Api.productAdd, product);
  }
}
