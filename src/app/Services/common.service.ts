import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;
  public binhPhuong(n: number): number{
    return n*n;
  }
  constructor() { }
  public submitData(data: any): void{
    console.log('Gui data len server. data = ', data);

  }
}
