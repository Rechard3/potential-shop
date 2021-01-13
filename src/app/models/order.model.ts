import { Product } from "./product.model";
import { User } from "./user.model";

interface OrderItem{
    product: Product;
    quantity: number;
}

/** represents the data of a single order */
export interface Order{
    /** the list of order items */
    items: OrderItem[];
    /** the time when the backend registered the order */
    timestamp: Date;
    /** the user linked to this order, either a user object or its id */
    user: string;
}