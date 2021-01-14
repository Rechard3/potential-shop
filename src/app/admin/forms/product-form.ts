import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BaseField } from 'src/app/core/forms/fields/base-field';
import { FormsService } from 'src/app/core/forms/forms.service';
import { Product } from 'src/app/models/product.model';

@Injectable()
export class ProductForm {
  fields: FormlyFieldConfig[];
  constructor(private forms: FormsService) {
    this.fields = forms.evaluate([
      this.factory._id(),
      this.factory.name(),
      this.factory.price(),
      this.factory.imageUrl(),
      this.factory.description(),
    ]);
  }

  readonly factory: { [key in keyof Product]: () => BaseField } = {
    name: () =>
      this.forms.field
        .input('name')
        .class(['col-6'])
        .label('Name')
        .placeholder('type the name of the product')
        .required(true),
    _id: () => this.forms.field.hidden('_id'),
    description: () =>
      this.forms.field
        .input('description' as keyof Product)
        .class(['col-6'])
        .label('Description')
        .placeholder('sell the product, why should the customer buy it')
        .required(true),
    imageUrl: () =>
      this.forms.field
        .input('imageUrl' as keyof Product)
        .class(['col-6'])
        .label('Image Url')
        .placeholder('url for the image to use as thumbnail of the product')
        .required(true),
    price: () =>
      this.forms.field
        .number('price')
        .class(['col-6'])
        .label('Price')
        .placeholder('in USD')
        .required(true),
  };
}
