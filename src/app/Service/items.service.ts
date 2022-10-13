import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  additem(item:any,order_id:any){
    return this.http.post(`serve/additem/${order_id}`,item);
  }
  getitems(){
    return this.http.get("serve/getitems");
  }
 
  getData(user_id:any){
    return this.http.get(`serve/getmenu/${user_id}`);
  }
}
