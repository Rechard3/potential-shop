import { FormlyFieldConfig } from "@ngx-formly/core";
import { ld } from "../../utils/lodash.exports";
import { BaseField } from "./base-field";
import { FieldTypes } from "./field-types.enum";

export class InputField extends BaseField{
    /**
     *
     */
    constructor(config?: FormlyFieldConfig) {
        super(config);
        ld.assign(this.config, {type: FieldTypes.input});
    }

    /** set the placeholder string for the field */
    placeholder(text: string){
        // this.config.templateOptions.placeholder
        ld.set(this.config, "templateOptions.placeholder", text || "");
        return this;
    }
}