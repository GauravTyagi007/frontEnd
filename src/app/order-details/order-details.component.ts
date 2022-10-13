import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  result:any=[]
  status:any=[]
  notcompleted:any=[]
  
  
  
    constructor(private orders:OrderService,private router:Router) { }
  
    ngOnInit(): void {
      this.orders.getallOrder().subscribe((data)=>{
        this.result=data
        console.log(data);
        for(var val of this.result){
          if (val.status===false){
            
            this.notcompleted.push(val)
          }
          else{
            this.status.push(val)
          }
        }
      })
  
  
    }
    getCompleted(){
     
      this.result=this.status
  
    }
  
    getNotCompleted(){
      this.result=this.notcompleted
    }
  
  }
        
  
  
  
