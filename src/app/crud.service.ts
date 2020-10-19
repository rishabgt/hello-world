import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private products:BehaviorSubject<Array<any>> = new BehaviorSubject([{id:1,product:"Mobile",price:20000},
  {id:2,product:"Headphone",price:1000},
  {id:3,product:"Laptop",price:50000},
  {id:4,product:"Data Card",price:1500},
  {id:5,product:"Speaker",price:2500},
  {id:6,product:"Charger",price:1500}]);
  products$ = this.products.asObservable();

  getProducts(){
    return this.products;
  }
  constructor() { }
}
