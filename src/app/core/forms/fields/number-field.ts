import { FormlyFieldConfig } from '@ngx-formly/core';
import { ld } from '../../utils/lodash.exports';
import { BaseField } from './base-field';
import { FieldTypes } from './field-types.enum';
import { InputField } from './input-field';

export class NumberField extends InputField {
  /**
   *
   */
  constructor(config?: FormlyFieldConfig) {
    super(config);
    ld.assign(this.config, {
      type: FieldTypes.number,
      templateOptions: {
        type: 'number',
      },
    });
  }
}
