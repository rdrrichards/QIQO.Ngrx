import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productActions from './products.actions';
import { ProductService } from './product.service';
import { switchMap, map } from 'rxjs/operators';
import { Product } from './product';


@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.ProductActionTypes.ProductLoadAction),
    switchMap(() => this.productService.getProducts()),
    map((products: Product[]) => (new productActions.ProductLoadSuccessAction(products)))
  ));
  constructor(private actions$: Actions, private productService: ProductService) {}
}
