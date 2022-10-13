import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../Service/items.service';
import { MenuServiceService } from '../Service/menu-service.service';
import { OrderService } from '../Service/order.service';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
})
export class AddItemsComponent implements OnInit {
  result: any;
  result1:any;
  quantity: any;
  user_id = localStorage.getItem('id');
  map = new Map<any, any>();
  total=0
  cName:any;
  cNumber:any;
  order_id=localStorage.getItem('order_id');
  isLoading=false;
  isPresent=false;
  constructor(
    private product:ProductsService,
    private items_service: ItemsService,
    private order: OrderService
  ) {}

  ngOnInit(): void {
    this.product.getProduct().subscribe((data) => {
      this.result1 = data;
      console.log(this.result1);
    });

    this.order.getOrder(this.order_id).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      this.cName=this.result.customerName
      this.cNumber=this.result.contactNumber
      
      this.isLoading=true;
    });
    
  }
  delete_items(id: any) {
    if (this.map.get(id) == 1) {
      this.map.delete(id);
    } else {
      this.map.set(id, this.map.get(id) - 1);
    }
    this.total-=id.price
  }
  items_list(id: any) {
    if (this.map.has(id)) {
      this.map.set(id, this.map.get(id) + 1);
    } else {
      this.map.set(id, 1);
    }
    this.total+=id.price
  }

  finalize() {
    console.log(this.map.values);
    this.map.forEach((value: any, key: any) => {
      let item = {
        productId: key.id,
        name: key.name,
        type: key.type,
        quantity: value,
        price: key.price,
      };
      this.items_service
        .additem(item, localStorage.getItem('order_id'))
        .subscribe((res) => {
          console.log(res);
        });
    });
    let updated_status = {
      id: localStorage.getItem('order_id'),
      totalPrice:this.total
    };
    this.order.finalize_order(updated_status,localStorage.getItem('id')).subscribe((res) => {
      console.log(res);
    });
  }
}
