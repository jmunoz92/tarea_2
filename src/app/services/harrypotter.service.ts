import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  urlHarryPotter='http://hp-api.herokuapp.com/api/characters/house/Hufflepuff';
  constructor(private http:HttpClient) { }


getHarryPotter():Observable<any>{

return this.http.get(this.urlHarryPotter)

}


}
