import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;
  switch_expression="setting";
  constructor(private user:UserService) { }
  cards:any;
  setting=false;
  ngOnInit(): void {
    this.cards=true;
    this.user.getUser(localStorage.getItem('id')).subscribe((res)=>{
      console.log(res);
      this.data=res;
    })
  }
  addItem(newItem: string) {
    console.log(newItem);
    this.switch_expression=newItem;
  }

}
