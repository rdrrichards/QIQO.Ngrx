import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Product } from './product';
import * as productActions from './products.actions';

export interface AppState {
  products: Product[];
}
export const initialState: AppState = {
  products: []
};

export function reducer(state = initialState, action: productActions.ProductActions): AppState {
  switch (action.type) {
    case productActions.ProductActionTypes.ProductLoadSuccessAction:
      return { products: action.payload };
    default:
      return state;
  }
}
