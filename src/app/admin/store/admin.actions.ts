import { Product } from "src/app/models/product";

export namespace AdminActions {


    /** Add a new product to the shop */
    export class AddProduct{
        static readonly type="[ADMIN FORMS] Add Product";
        
        /** @param payload the product to be added */
        constructor(public payload: Product) {
        }
    }
}