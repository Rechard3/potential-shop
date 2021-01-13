import { environment } from "src/environments/environment";

export class Api {
    static productList = [environment.server, "product"].join("/");
    static productAdd = [environment.server, "product", "add"].join("/");
    static productEdit = [environment.server, "product", "edit"].join("/");
    static productDelete = [environment.server, "product", "delete"].join("/");
    
    static cartList = [environment.server, "cart"].join("/");
    static cartAddProduct = [environment.server, "cart", "add-product"].join("/");
    static cartRemoveProduct = [environment.server, "cart", "remove-product"].join("/");

    static orderCart = [environment.server, "order", "confirm"].join("/");
    static orderFetchAll = [environment.server, "order", "history"].join("/");
}
