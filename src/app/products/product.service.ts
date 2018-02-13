import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    console.log('getProducts');
    return Observable.of(PRODUCTS);
  }

}

export const PRODUCTS = [
  { productId: 1, productCode: 'APPLE', productName: 'APPLE PIE CHEESECAKE 9"' },
  { productId: 2, productCode: 'CRAP', productName: 'CARMEL APPLE CHEESECAKE 9"' }
];
