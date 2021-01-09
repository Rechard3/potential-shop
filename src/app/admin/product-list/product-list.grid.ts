import { GridOptions } from 'ag-grid-community';
import { Product } from 'src/app/models/product.model';

export class ProductsListGrid {
  options: GridOptions = {
    columnDefs: [
      { headerName: 'Product', field: 'name' as keyof Product },
      { field: 'price' as keyof Product, headerName: '$$$' },
    ],
  };
}
