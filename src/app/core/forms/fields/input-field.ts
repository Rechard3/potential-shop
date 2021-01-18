import { FormlyFieldConfig } from '@ngx-formly/core';
import { ld } from '../../utils/lodash.exports';
import { BaseField } from './base-field';
import { FieldTypes } from './field-types.enum';

type InputType = 'text' | 'number' | 'password' | 'date' | 'datetime' | 'email';

export class InputField extends BaseField {
  /**
   *
   */
  constructor(config?: FormlyFieldConfig) {
    super(config);
    ld.assign(this.config, { type: FieldTypes.input });
  }

  /** set the placeholder string for the field */
  placeholder(text: string) {
    // this.config.templateOptions.placeholder
    ld.set(this.config, 'templateOptions.placeholder', text || '');
    return this;
  }

  /** specify the type of this input field */
  type(type: InputType) {
    ld.set(this.config, 'templateOptions.type', type || 'text');
    return this;
  }

  /** sets the "autocomplete" property on the input field so that the browser
   * has more info on how to process this field
   */
  autocomplete(type: "username" | "current-password" | "new-password" | "email"){
      ld.set(this.config, "templateOptions.autoComplete", type);
      return this;
  }
}
