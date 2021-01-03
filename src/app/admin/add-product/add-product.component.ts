import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AdminActions } from '../store/admin.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}
  form = this.fb.group(
    {
      name: "",
      price: null,
      description: "",
      imageUrl: "",
    },
    {
      asyncValidators: [],
      validators: [],
    }
  );
  model = {};

  ngOnInit(): void {}

  submit() {
    this.store.dispatch(new AdminActions.AddProduct(this.form.value));
  }
}
