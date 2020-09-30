import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[table-head]',
  template: `<tr scope="row">
    <td scope="col">Id</td>
    <td scope="col">Product</td>
    <td scope="col">Price</td>
  <tr>`,
  styleUrls: ['./table.component.css']
})

export class TableHeadComponent{

}