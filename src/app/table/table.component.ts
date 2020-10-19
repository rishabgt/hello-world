import { CrudService } from './../crud.service';
import { Input, ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  arr:any[];
  @ViewChild("id") id;
  @ViewChild("product") product;
  @ViewChild("price") price;
  constructor(private _service:CrudService) {
    _service.products$.subscribe(data=>{
      this.arr = data;
    })
   }
   
   addRecord(){
    if(this.id.nativeElement.value==""||this.product.nativeElement.value==""||this.price.nativeElement.value=="")
    alert("All fields are mandatory!!!");
    else{
    this.arr.push({
      id:this.id.nativeElement.value,
      product:this.product.nativeElement.value,
      price:this.price.nativeElement.value
    });
    this.id.nativeElement.value = "";
    this.product.nativeElement.value = "";
    this.price.nativeElement.value = "";
  }
  }

  ngOnInit(): void {
  }

}
