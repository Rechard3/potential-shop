import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { first } from 'rxjs/operators';
import { ProductForm } from '../forms/product-form';
import { AdminActions } from '../store/admin.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store,
    public formDef: ProductForm,
  ) {}
  form = this.fb.group({});
  model = {};

  ngOnInit(): void {}

  submit() {
    this.store
      .dispatch(new AdminActions.AddProduct(this.form.value))
      .pipe(first())
      .subscribe((state) => this.router.navigateByUrl('/shop'));
  }
}
