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

    /** edit a product, sends a request to the backend */
    export class UpdateProduct{
        static readonly type="[Product API] Set Products List";
        constructor(public payload: Product) {
        }
    }

    /** ask for a fresh cart information for the logged in user */
    export class FetchCart{
        static readonly type="[SHOP REFRESH] fetch cart";
    }

    /** add a product to the list of cart items */
    export class AddProductToCart{
        static readonly type="[SHOP UI] add product to cart";
        
        constructor(public payload: Product) {
        }
    }

    /** remove a quantity of some product from the cart
    */
    export class RemoveProductFromCart{
        static readonly type="[CART GRID] remove product";
        /** 
         * @param product the product to be removed
         * @param quantity how many instances to remove
         */
        constructor(public product: Product, public quantity: number) {
        }
    }
}