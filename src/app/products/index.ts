import { ActionReducerMap } from '@ngrx/store';
import { Product } from './product';
import * as fromProducts from './products.reducer';

export const reducers: ActionReducerMap<any> = {
  products: fromProducts.reducer
};
