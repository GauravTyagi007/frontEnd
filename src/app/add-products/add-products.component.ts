import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuServiceService } from '../Service/menu-service.service';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  isLoading=false;
  result: any;
  
  user_id = localStorage.getItem('id');
  constructor(
    private product:ProductsService,private menu:MenuServiceService
  ) {}

  ngOnInit(): void {
    this.product.getProduct().subscribe((data) => {
      this.result = data;
      this.isLoading=true;
      console.log(this.result);
    });
  }
  delete_product(id:any){
    this.product.deleteproduct(id).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }
  addProdut(form:NgForm){
    console.log(form.value);
    this.product.addproduct(form.value,localStorage.getItem('id')).subscribe((res)=>{
      console.log(res);
      form.reset()
      this.ngOnInit();
    })
  }
}