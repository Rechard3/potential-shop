import { NgModule } from '@angular/core';
import {
  FormsModule as NgFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HiddenComponent } from './fields/hidden/hidden.component';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { FieldTypes } from './fields/field-types.enum';

const config: ConfigOption = {
  types: [{ name: FieldTypes.hidden, component: HiddenComponent }],
};

@NgModule({
  declarations: [HiddenComponent],
  imports: [CommonModule, FormlyModule.forChild(config)],
  exports: [FormlyModule, NgFormsModule, ReactiveFormsModule],
})
export class FormsModule {}
 