import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient){}

  fetchGoodBoy(){
    return this.http.get("https://dog.ceo/api/breeds/image/random");
  }
  fetchMultiple(num){
    return this.http.get("https://dog.ceo/api/breeds/image/random/"+num);
  }

}
