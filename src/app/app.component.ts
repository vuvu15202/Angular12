import { Component } from '@angular/core';
import {GetAPIService} from './Services/get-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular12';
  projectforce:any;
  constructor(private projectforceData:GetAPIService){
    this.projectforceData.projectforce().subscribe((data)=>{
      console.log('data: ',data);
    });
  }
}
