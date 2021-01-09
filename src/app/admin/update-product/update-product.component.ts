import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { first, map } from 'rxjs/operators';
import { ProductForm } from '../forms/product-form';
import { AdminActions } from '../store/admin.actions';
import { AdminState, AdminStateModel } from '../store/admin.state';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public formDef: ProductForm
  ) {}

  form = this.fb.group({});
  model = {};

  ngOnInit(): void {
    this.store
      .selectOnce(AdminState)
      .subscribe(
        (state: AdminStateModel) => (this.model = state.selectedProduct)
      );
  }

  submit() {
    this.store
      .dispatch(new AdminActions.UpdateProduct(this.form.value))
      .pipe(first())
      .subscribe((state) => {
        this.router.navigateByUrl('/shop');
      });
  }
}
