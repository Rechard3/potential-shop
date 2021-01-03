import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { ShopActions } from "src/app/shop/store/shop.actions";
import { AdminService } from "../admin.service";
import { AdminActions as actions } from "./admin.actions";

export interface AdminStateModel{

}

const defaultState: AdminStateModel = {

};

type Ctx = StateContext<AdminStateModel>;

@State<AdminStateModel>({
    name: "admin",
    defaults: defaultState,
})
@Injectable()
export class AdminState{
    constructor(private adminService: AdminService) {
        
    }


    @Action(actions.AddProduct)
    addProduct(ctx: Ctx, {payload}: actions.AddProduct){
        return this.adminService.addNewProduct(payload).pipe(
            tap(product=>ctx.dispatch(new ShopActions.FetchProducts()))
        );
    }
}