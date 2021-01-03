import { environment } from "src/environments/environment";

export class Api {
    static productList = [environment.server, "product"].join("/");
    static productAdd = [environment.server, "product", "add"].join("/");
}
