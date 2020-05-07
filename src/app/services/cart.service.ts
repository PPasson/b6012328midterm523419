import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  counter:number = 0;
  cart: productsModel = [];
  sumPrice: number = 0;
  cartProduct: productsModel = [];
  total: number = 0

  constructor(private productService: ProductService) { }

  add(p_id: number){
    console.log('Add product id: '+ id+' to cart');
    this.cart.push(this.productService.getSomeProduct(id));
    this.counter = this.cart.length;
  }

  getCounter(){
    return this.counter;
  }

  getSumPrice(){
    return this.sumPrice;
  }

  getCart(){
    return this.cart;
  }

}
