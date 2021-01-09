import { Product } from "src/app/models/product.model";

export namespace AdminActions {


    /** Add a new product to the shop */
    export class AddProduct{
        static readonly type="[ADMIN FORMS] Add Product";
        
        /** @param payload the product to be added */
        constructor(public payload: Product) {
        }
    }

    /** update an existing product */
    export class UpdateProduct{
        static readonly type="[ADMIN FORMS] Update Product";
        constructor(public payload: Product) {
        }
    }

    /** set a product to be manipulated in the admin module */
    export class SelectProduct{
        static readonly type="[ADMIN] Select Product";
        constructor(public payload: Product){}
    }
}