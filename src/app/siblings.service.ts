import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingsService {
  private data = new Subject<string>();
  data$ = this.data.asObservable();
  getData(){
    return this.data;
  }

  setData(data){
    this.data.next(data);
  }
  constructor() { }
}
