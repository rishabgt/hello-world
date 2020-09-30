import { Input, ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() arr1;
  
  constructor() {
    // this.arr=[{id:1,product:"Mobile",price:20000},
    //           {id:2,product:"Headphone",price:1000},
    //           {id:3,product:"Laptop",price:50000},
    //           {id:4,product:"Data Card",price:1500},
    //           {id:3,product:"Speaker",price:2500},
    //           {id:3,product:"Charger",price:1500}];
   }

  ngOnInit(): void {
  }

}
