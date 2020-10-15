import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any[];
  constructor(private _cartService:CartService) { }

  delete(index){
    this.cartItems.splice(index,1);
  }

  ngOnInit(): void {
    this._cartService.cartProducts$.subscribe(items=>{
      console.log("Changed",this._cartService.getCartProducts());
      this.cartItems = items;
    })
  }

}
