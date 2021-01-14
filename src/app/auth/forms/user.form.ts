import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/core/forms/fields/base-field';
import { FormsService } from 'src/app/core/forms/forms.service';

interface UserFormFields {
  username: unknown;
  password: unknown;
  confirmPassword: unknown;
}

@Injectable({ providedIn: 'root' })
export class UserForm {
  factory: { [key in keyof UserFormFields]: () => BaseField } = {
    username: () =>
      this.forms.field
        .input('username')
        .label('Username')
        .placeholder('enter your username here')
        .required(),
    password: () =>
      this.forms.field
        .input('password')
        .label('password')
        .placeholder('enter your password')
        .type('password'),
    confirmPassword: () =>
      this.forms.field
        .input('confirmPassword')
        .label('password')
        .placeholder('enter your password')
        .type('password')
        .validate({
          matchesPassword: {
            expression: (control, field) => {
              return control.value == field.form.get('password').value;
            },
            message: (err) =>
              'Does not match password, make sure you typed it correctly',
          },
        }),
  };
  constructor(private forms: FormsService) {}
  fields = this.forms.evaluate([
    this.factory.username(),
    this.factory.password(),
    this.factory.confirmPassword(),
  ]);
}
