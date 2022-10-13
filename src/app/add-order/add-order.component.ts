import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  data: any;
  error=false;
  constructor(private orders: OrderService, private router: Router) {}

  ngOnInit(): void {}
  addOrder(form: NgForm) {
    console.log(form.value);
   
      this.orders
        .addorder(form.value, localStorage.getItem('id'))
        .subscribe((res) => {
          console.log(res);
          this.data = res;
          localStorage.setItem('order_id', this.data.id);
          this.router.navigate(['/dashboard/add_item']);
        });
    
  }
  hide(){
    this.error=false
  }
}
