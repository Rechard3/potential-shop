import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import { map, tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ShopActions } from 'src/app/shop/store/shop.actions';
import { ShopState } from 'src/app/shop/store/shop.state';
import { AdminService } from '../admin.service';
import { AdminActions as actions } from './admin.actions';

export interface AdminStateModel {
  selectedProduct: Product;
}

const defaultState: AdminStateModel = {
  selectedProduct: null,
};

type Ctx = StateContext<AdminStateModel>;

@State<AdminStateModel>({
  name: 'admin',
  defaults: defaultState,
})
@Injectable()
export class AdminState {
  constructor(private adminService: AdminService, private store: Store) {}

  @Action(actions.AddProduct)
  addProduct(ctx: Ctx, { payload }: actions.AddProduct) {
    return this.adminService
      .addNewProduct(payload)
      .pipe(tap((product) => ctx.dispatch(new ShopActions.FetchProducts())));
  }

  @Action(actions.UpdateProduct)
  updateProduct(ctx: Ctx, { payload }: actions.UpdateProduct) {
    return this.adminService.updateProduct(payload).pipe(
      tap((product) => {
        ctx.dispatch(new ShopActions.UpdateProduct(product));
      })
    );
  }

  @Action(actions.SelectProduct)
  selectProduct(ctx: Ctx, { payload }: actions.SelectProduct) {
    ctx.setState(
      produce(ctx.getState(), (state) => {
        state.selectedProduct = payload;
      })
    );
  }
}
