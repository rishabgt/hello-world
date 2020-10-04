import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[table-data]',
  template: `<tr *ngFor="let data of arr;let i = index">
  <td scope="col">{{data.id}}</td>
  <td scope="col">{{data.product}}</td>
  <td scope="col">{{data.price}}</td>
  <td scope="col"><button class="btn btn-danger" (click)="deleteRecord(i)">Delete</button></td>
</tr>`,
  styleUrls: ['./table.component.css']
})

export class TableDataComponent{
  @Input()arr;
    deleteRecord(i){
            this.arr.splice(i,1);
    }
    constructor(){
        // this.arr=[{id:1,product:"Mobile",price:20000},
        //       {id:2,product:"Headphone",price:1000},
        //       {id:3,product:"Laptop",price:50000},
        //       {id:4,product:"Data Card",price:1500},
        //       {id:3,product:"Speaker",price:2500},
        //       {id:3,product:"Charger",price:1500}];
    }
}