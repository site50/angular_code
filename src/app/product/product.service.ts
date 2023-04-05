import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';


@Injectable()
export class ProductService {

   constructor(private http: HttpClient) { }

   getData() {
   
      return this.http.get<Product[]>('../../assets/cart-products.json')

   }
}
