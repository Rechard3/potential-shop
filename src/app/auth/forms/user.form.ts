import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/core/forms/fields/base-field';
import { InputField } from 'src/app/core/forms/fields/input-field';
import { FormsService } from 'src/app/core/forms/forms.service';

interface UserFormFields {
  username: unknown;
  password: unknown;
  confirmPassword: unknown;
  email: unknown;
}

@Injectable({ providedIn: 'root' })
export class UserForm {
  factory: { [key in keyof UserFormFields]: () => BaseField } = {
    username: () =>
      this.forms.field
        .input('username')
        .label('Username')
        .placeholder('enter your username here')
        .autocomplete("username")
        .required(true),
    email: () =>
      this.forms.field
        .input('email')
        .label('email')
        .placeholder('please type your email address in here')
        .type('email')
        .stdValidation(['email'])
        .autocomplete("email")
        .required(true),
    password: () =>
      this.forms.field
        .input('password')
        .label('password')
        .placeholder('enter your password')
        .type('password')
        .required(true),
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
    this.factory.username().class(['col-6']),
    this.factory.password().class(['col-6']),
    this.factory.confirmPassword().class(['col-6']),
    this.factory.email().class(['col-6']),
  ]);

  loginFormFields = this.forms.evaluate([
    this.factory.username().class(['col-8']),
    (<InputField>this.factory.password().class(['col-8'])).autocomplete(
      'current-password'
    ),
  ]);
}
