import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addproduct(product:any,user_id:any){
    return this.http.post(`serve/addproduct/${user_id}`,product);
  }
  deleteproduct(product_id:any){
    return this.http.delete(`serve/deleteproduct/${product_id}`);
  }
  getProduct(){
    return this.http.get(`serve/getproduct`);
}
}
