import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as productActions from './products.actions';
import { ProductService } from './product.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$ = this.actions$.ofType(productActions.ProductActionTypes.ProductLoadAction)
    .switchMap(() => this.productService.getProducts()
      .map(products => (new productActions.ProductLoadSuccessAction(products)))
    );
  constructor(private actions$: Actions, private productService: ProductService) {}
}
