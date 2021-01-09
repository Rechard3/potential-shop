import { Product } from "src/app/models/product.model";


export namespace ShopActions{
    /** fetch the list of products from the backend */
    export class FetchProducts{
        static readonly type="[Product INIT] Fetch/List";
    }


    /** remove a product from the backend */
    export class RemoveProduct{
        static readonly type="[Product UI] Remove Product";
        constructor(public payload: Product) {
        }
    }

    export class UpdateProduct{
        static readonly type="[Product API] Set Products List";
        /**
         *
         */
        constructor(public payload: Product) {
            
        }
    }
}