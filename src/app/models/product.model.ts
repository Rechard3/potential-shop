export interface Product {
    /** the internal primary key of the product document */
    _id: string;
    /** text description of the product */
    description: string;
    /** name of the product */
    name: string;
    /** price of the product in USD */
    price: number;
    /** url to an image of the product */
    imageUrl: string;
}
