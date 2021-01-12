import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ShopService } from '../shop.service';
import { ShopActions as actions } from './shop.actions';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { produce } from 'immer';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

export interface ShopStateModel {
  products: Product[];
  cart: (Product & { quantity: number })[];
}

const defaultState: ShopStateModel = {
  products: [],
  cart: [],
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
  static productsList(state: ShopStateModel) {
    return state.products;
  }

  @Selector()
  static cart(state: ShopStateModel) {
    return (state.cart || []).map((item) => ({
      ...item,
      total: item['price'] * item['quantity'],
    }));
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

  @Action(actions.RemoveProduct)
  removeProduct(ctx: Ctx, { payload }: actions.RemoveProduct) {
    return this.shop.removeProduct(payload).pipe(
      catchError((error) => {
        console.error(error);
        return [];
      }),
      switchMap((res) => ctx.dispatch(new actions.FetchProducts()))
    );
  }

  @Action(actions.UpdateProduct)
  updateProduct(ctx: Ctx, { payload }: actions.UpdateProduct) {
    const products = ctx.getState().products;
    const targetIdx = products.findIndex((p) => p._id == payload._id);
    ctx.setState(
      produce(ctx.getState(), (state) => {
        if (targetIdx) state.products[targetIdx] = payload;
        else state.products.push(payload);
      })
    );
  }

  @Action(actions.FetchCart)
  fetchCart(ctx: Ctx) {
    return this.shop.fetchCart().pipe(
      tap((cart: any) => {
        ctx.setState(
          produce(ctx.getState(), (state) => {
            state.cart = cart;
          })
        );
      })
    );
  }

  @Action(actions.AddProductToCart)
  addProductToCart(
    { setState, getState }: Ctx,
    { payload }: actions.AddProductToCart
  ) {
    return this.shop.addProductToCart(payload).pipe(
      tap((resp) => {
        console.log('product added to cart');
      })
    );
  }

  @Action(actions.RemoveProductFromCart)
  removeProductFromCart({}: Ctx, {product, quantity}: actions.RemoveProductFromCart){
    console.log(`removing ${quantity} of ${product.name} from cart`);
  }
}
