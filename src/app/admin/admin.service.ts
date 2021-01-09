import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Api } from '../core/api';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  /** send a request to the backend to create a new product */
  addNewProduct(product: Product){
    return this.http.post<Product>(Api.productAdd, product);
  }


  /** send a request to the backend to update an existing product */
  updateProduct(product: Product){
    return this.http.post<Product>(Api.productEdit, product);
  }
}
