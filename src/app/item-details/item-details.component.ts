import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../Service/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
res:any
  constructor(private items:ItemsService,private router:Router) { }

  ngOnInit(): void {
    this.items.getitems().subscribe((data)=>{
      this.res=data
      console.log(this.res);
    })
  }

}
