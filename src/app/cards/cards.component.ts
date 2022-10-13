import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor(private user:UserService) { }
manager=false;
staff=false;
result:any
  ngOnInit(): void {
    this.user.getUser(localStorage.getItem('id')).subscribe((data) => {
      this.result = data;
      if(this.result.role=="manager"){
        this.manager=true;
      }
      if(this.result.role=="staff"){
        this.staff=true;
      }
      console.log(this.result);
    });
  }
}
