import { Action } from '@ngrx/store';
import { Product } from './product';

export enum ProductActionTypes {
  ProductLoadAction = '[Product] Load Action',
  ProductLoadSuccessAction = '[Product] Load Success Action',
  ProductDeleteAction = '[Product] Delete Action',
  ProductDeleteSuccessAction = '[Product] Delete Success Action'
}

export class ProductLoadAction implements Action {
  readonly type = ProductActionTypes.ProductLoadAction;
  constructor() {}
}
export class ProductLoadSuccessAction implements Action {
  readonly type = ProductActionTypes.ProductLoadSuccessAction;
  constructor(public payload: Product[]) {}
}
export class ProductDeleteAction implements Action {
  readonly type = ProductActionTypes.ProductDeleteAction;
  constructor() {}
}
export class ProductDeleteSuccessAction implements Action {
  readonly type = ProductActionTypes.ProductDeleteSuccessAction;
  constructor(public payload: number) { }
}

export type ProductActions = ProductLoadAction
  | ProductLoadSuccessAction
  | ProductDeleteAction
  | ProductDeleteSuccessAction;
