import { TableComponent } from './../table/table.component';
import { identifierModuleUrl } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addingdata',
  templateUrl: './addingdata.component.html',
  styleUrls: ['./addingdata.component.css']
})
export class AddingdataComponent implements OnInit{
  @Input()arr;
  @ViewChild("id") id;
  @ViewChild("product") product;
  @ViewChild("price") price;
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
  constructor() { }

  ngOnInit(): void {
  }

}
