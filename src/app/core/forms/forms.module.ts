import { NgModule } from '@angular/core';
import {
  FormsModule as NgFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HiddenComponent } from './fields/hidden/hidden.component';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { FieldTypes } from './fields/field-types.enum';
import { InputComponent } from './fields/input/input.component';
import { MaterialModule } from '../material/material.module';

const config: ConfigOption = {
  types: [
    { name: FieldTypes.hidden, component: HiddenComponent },
    { name: FieldTypes.input, component: InputComponent },
  ],
  validationMessages: [
    { name: 'required', message: 'this field is required' },
    {
      name: 'email',
      message: 'The entered value is not a valid email',
    },
  ],
  validators: [
    {
      name: 'email',
      validation: (control, field) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value)
          ? null
          : { email: true };
      },
    },
  ],
};

@NgModule({
  declarations: [HiddenComponent, InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormlyModule.forChild(config),
  ],
  exports: [FormlyModule, NgFormsModule, ReactiveFormsModule],
})
export class FormsModule {}
