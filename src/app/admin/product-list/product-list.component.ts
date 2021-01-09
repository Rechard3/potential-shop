import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ShopActions } from 'src/app/shop/store/shop.actions';
import { ShopState } from 'src/app/shop/store/shop.state';
import { ProductsListGrid } from './product-list.grid';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private store: Store) { }

  gridDef = new ProductsListGrid();
  @Select(ShopState.productsList) products: Observable<Product[]>;

  ngOnInit(): void {
    this.store.dispatch(new ShopActions.FetchProducts()); 
  }

}
