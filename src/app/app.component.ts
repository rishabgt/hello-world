import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  arr=[{id:1,product:"Mobile",price:20000},
  {id:2,product:"Headphone",price:1000},
  {id:3,product:"Laptop",price:50000},
  {id:4,product:"Data Card",price:1500},
  {id:5,product:"Speaker",price:2500},
  {id:6,product:"Charger",price:1500}];;
}
