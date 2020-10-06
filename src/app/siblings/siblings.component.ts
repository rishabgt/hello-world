import { SiblingsService } from './../siblings.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit {
  constructor(private _siblingsService:SiblingsService) {
    _siblingsService.data$.subscribe(data=>(this.name=data));
  }
  name:string;
  
  ngOnInit(): void {
    this._siblingsService.setData("Rishab1");
  }

  changeName(){
    if(this.name==="Rishab1")
      this._siblingsService.setData("Rishab2");
    else
      this._siblingsService.setData("Rishab1");  
  }
}
