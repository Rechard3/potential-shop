import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";
import { FormlyField, FormlyFieldConfig } from "@ngx-formly/core";
import { Observable } from "rxjs";
import { ld } from "../../utils/lodash.exports";


interface FormlyInlineValidator{
    expression: (control: AbstractControl, field: FormlyFieldConfig) => boolean;
    message: (error, field: FormlyFieldConfig)=>string | Promise<string> | Observable<string>;
}

export class BaseField {
    config: FormlyFieldConfig = {};
    constructor(config?: FormlyFieldConfig){
        ld.assign(this.config, config || {});
    }

    /** set the property which this field is connected to */
    key(id: string){
        ld.set(this.config, "key" ,id);
        return this;
    }
    /** set the label of the field */
    label(label: string){
        ld.set(this.config, "templateOptions.label", label);
        return this;
    }

    /** add class names to the field's classes */
    class(classes: string | string[]){
        const classList = ld.isArray(classes) ? classes : classes.split(" ");
        ld.set(this.config, "className", [this.config.className, classList].join(" "));
        return this;
    }

    value(){
        return ld.cloneDeep(this.config);
    }

    /** adds "validators" to the list of field sync validators */
    validate(validators: {[key: string]: FormlyInlineValidator}){
        // ld.set(this, "config.validators", validators);
        ld.assign(this.config, {validators: {...ld.get(this.config, "validators", {}), ...validators}});
        return this;
    }

    stdValidation(validators: string[]){
        const oldValidation: string[] = ld.get(this, "config.validators.validation", []);
        oldValidation.push(...validators);
        ld.set(this, "config.validators.validation", oldValidation);
        return this;
    }

    /** whether the field is required or not */
    required(value: boolean = true){
        ld.set(this.config.templateOptions, "required", value);
        return this;
    }
}
