import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AdminActions } from 'src/app/admin/store/admin.actions';
import { Product } from 'src/app/models/product.model';
import { ShopActions } from '../store/shop.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;

  readonly extraActionsRoles = ['admin', 'marketing'];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  removeProduct(product: Product) {
    this.store.dispatch(new ShopActions.RemoveProduct(product));
  }

  updateProduct() {
    this.store
      .dispatch(new AdminActions.SelectProduct(this.product))
      .subscribe((state) => {
        this.router.navigateByUrl('/admin/update-product');
      });
  }
}
