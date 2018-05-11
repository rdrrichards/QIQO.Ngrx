import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './products.reducer';
import { Observable } from 'rxjs';
import { Product } from './product';
import * as productActions from './products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private productStore: Store<AppState>) {
    this.products$ = this.productStore.select(state => state.products);
  }

  ngOnInit() {
    this.productStore.dispatch(new productActions.ProductLoadAction());
  }

}
