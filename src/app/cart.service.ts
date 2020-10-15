import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts:BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  cartProducts$ = this.cartProducts.asObservable();

  getCartProducts(){
      return this.cartProducts;
  }

  pushCartProducts(obj){
    const currentValue = this.cartProducts.value;
    const updatedValue = [...currentValue,obj];
    this.cartProducts.next(updatedValue);
  }

  constructor() { 
   
  }
}
