import { FormlyFieldConfig } from "@ngx-formly/core";
import { BaseField } from "./base-field";
import { FieldTypes } from "./field-types.enum";

export class HiddenField extends BaseField {
    /**
     *
     */
    constructor(config?: FormlyFieldConfig) {
        super(config);
        this.config.type = FieldTypes.hidden;
    }
}
