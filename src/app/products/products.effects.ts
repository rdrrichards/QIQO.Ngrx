import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as productActions from './products.actions';
import { ProductService } from './product.service';
import { switchMap, map } from 'rxjs/operators';
import { Product } from './product';


@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$ = this.actions$.ofType(productActions.ProductActionTypes.ProductLoadAction).pipe(
      switchMap(() => this.productService.getProducts()),
      map((products: Product[]) => (new productActions.ProductLoadSuccessAction(products)))
    );
  constructor(private actions$: Actions, private productService: ProductService) {}
}
