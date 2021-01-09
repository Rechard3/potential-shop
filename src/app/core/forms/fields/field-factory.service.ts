import { Injectable } from '@angular/core';
import { HiddenField } from './hidden-field';
import { InputField } from './input-field';
import { NumberField } from './number-field';

@Injectable({providedIn: "root"})
export class FieldFactoryService {

  constructor() { }

  /**
   * create a input-field factory object
   * @param key the property which this field should be bound to
   */
  input(key?: string){
    return new InputField().key(key);
  }

  /** get a number field */
  number(key?: string){
    return new NumberField().key(key);
  }

  /** get a factory for a hidden field */
  hidden(key?: string){
    return new HiddenField().key(key);
  }
}
