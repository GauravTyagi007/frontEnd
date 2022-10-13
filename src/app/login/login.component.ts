import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Service/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data: any;
  constructor(private user: UserService, private route: Router) {}
  error=false;
  ngOnInit(): void {}
  logUser(form: NgForm) {
    console.log(form.value);
    this.user.loginUser(form.value).subscribe((res) => {
      console.log(res);
      if (res === null) {
        this.error=true;
      } else {
        this.data = res;
        localStorage.setItem('id', this.data.id);
        this.go();
        
      }
    });
  }
  go() {
    this.route.navigate(['/dashboard/cards']); // navigate to other page
  }
  hide(){
    this.error=false
  }
  
}
