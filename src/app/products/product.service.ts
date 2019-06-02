import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    console.log('getProducts'); // 'http://localhost:34479/api/products'
    // return this.httpClient.get<Product[]>('http://localhost:34479/api/products');
    return of(PRODUCTS);
  }

}

export const PRODUCTS: Product[] = [
  { productKey: 1, productCode: 'APPLE', productName: 'APPLE PIE CHEESECAKE 9"' },
  { productKey: 2, productCode: 'CRAP', productName: 'CARMEL APPLE CHEESECAKE 9"' }
];
