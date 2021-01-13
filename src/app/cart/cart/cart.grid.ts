import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ColDef, GridOptions } from 'ag-grid-community';
import {
  GridButtonComponent,
  GridButtonParams,
} from 'src/app/core/grid/grid-button/grid-button.component';
import { LoadingOverlayComponent } from 'src/app/core/grid/loading-overlay/loading-overlay.component';
import { Product } from 'src/app/models/product.model';
import { ShopActions } from 'src/app/shop/store/shop.actions';

type CartGridColumnFactories = Partial<
  { [key in keyof (Product & {[key: string]: any})]: () => ColDef }
>;

@Injectable({ providedIn: 'root' })
export class CartGridService {
  
  constructor(private store: Store) {}
  columns: CartGridColumnFactories = {
    name: () => ({
      headerName: 'Prod. Name',
      field: 'name',
    }),
    price: () => ({
      headerName: 'Price $',
      field: 'price',
    }),
    quantity: () => ({
      headerName: 'Amount',
      field: 'quantity',
    }),
    total: () => ({
      headerName: 'Total $',
      field: 'total',
    }),
    decreaseProductQuantity: () => ({
      headerName: 'remove one',
      cellRendererFramework: GridButtonComponent,
      cellRendererParams: <GridButtonParams>{
        params: {
          icon: 'remove',
          onClick: row=>this.store.dispatch(new ShopActions.RemoveProductFromCart(row, 1)),
          precalcHidden: row=>!!row.buttonHidden,
        }
      }
    }),
    removeProductStack: () => ({
      headerName: 'remove all',
      cellRendererFramework: GridButtonComponent,
      cellRendererParams: <GridButtonParams>{
        params: {
          icon: 'delete',
          onClick: (row) => this.store.dispatch(new ShopActions.RemoveProductFromCart(row, row.quantity)),
          precalcHidden: (row) => !!row.buttonHidden,
        },
      },
    }),
  };

  gridOptions: GridOptions = {
    columnDefs: [
      this.columns.name(),
      this.columns.price(),
      this.columns.quantity(),
      this.columns.total(),
      this.columns.decreaseProductQuantity(),
      this.columns.removeProductStack(),
    ],
    suppressNoRowsOverlay: true,
    frameworkComponents: {
      loading: LoadingOverlayComponent,
    },
    loadingOverlayComponent: 'loading',
    onGridReady(evt) {
      evt.api.setDomLayout('autoHeight');
      evt.api.sizeColumnsToFit();
    },
  };
}
