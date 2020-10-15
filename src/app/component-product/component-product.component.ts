import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-component-product',
  templateUrl: './component-product.component.html',
  styleUrls: ['./component-product.component.css']
})
export class ComponentProductComponent implements OnInit {

  products: any[] = [
    {
      "name": "Mobile",
      "price": 10000
    },
    {
      "name": "Speaker",
      "price": 2000
    }
  ];

  add(a:string,b:number){
    this._cartService.pushCartProducts({"name":a,"price":b});
  }

  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    
  }

}
