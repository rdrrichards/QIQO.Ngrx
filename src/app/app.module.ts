import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products/products.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './products';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductService } from './products/product.service';
import { ProductsListComponent } from './products/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent }
    ]),
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'QIQO Ngrx Playgroud',
      maxAge: 40,
      logOnly: environment.production
    })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
