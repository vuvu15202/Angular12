import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  url = 'http://localhost:8088/stats/testAPI';
  constructor(private http:HttpClient) { 
    
  }
  projectforce(){
    return this.http.get(this.url);
  }
}
