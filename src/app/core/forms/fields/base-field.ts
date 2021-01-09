import { FormlyFieldConfig } from "@ngx-formly/core";
import { ld } from "../../utils/lodash.exports";

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
}
