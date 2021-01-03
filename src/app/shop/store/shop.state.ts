import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from 'src/app/models/product';
import { ShopService } from '../shop.service';
import { ShopActions as actions } from './shop.actions';
import { tap } from 'rxjs/operators';
import { produce } from 'immer';
import { Injectable } from '@angular/core';

export interface ShopStateModel {
  products: Product[];
}

const defaultState: ShopStateModel = {
  products: [],
};

type Ctx = StateContext<ShopStateModel>;

@State<ShopStateModel>({
  name: 'shop',
  defaults: defaultState,
})
@Injectable()
export class ShopState {
  /**
   *
   */
  constructor(private shop: ShopService) {}

  @Selector()
  static productsList(state: ShopStateModel){
    return state.products;
  }

  @Action(actions.FetchProducts)
  fetchProducts(ctx: Ctx) {
    return this.shop.fetchProducts().pipe(
      tap((products) => {
        ctx.setState(
          produce(ctx.getState(), (state) => {
            state.products = products;
            return state;
          })
        );
      })
    );
  }
}
