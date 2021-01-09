import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BaseField } from './fields/base-field';
import { FieldFactoryService } from './fields/field-factory.service';

@Injectable({providedIn: "root"})
export class FormsService {

  constructor(private fields: FieldFactoryService) { }

  /** get an instance of the fields factory */
  get field(){
    return this.fields;
  }

  /** evaluate a form definition factory */
  evaluate(formDef: BaseField[]){
    return formDef.map(field=>field.value());
  }
}
