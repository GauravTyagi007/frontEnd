import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user:UserService,private route:Router) { }

  ngOnInit(): void {}
  
  // regUser(form:NgForm){
    onSubmit(form:NgForm){
    console.log(form.value);
    this.user.addUser(form.value).subscribe((res)=>{
      console.log(res);
      this.go();
    })
  
  }
  // onSubmit(form:NgForm){
  //   console.log(form)
  //   console.log(form.value)
  
  // }

  go(){
		this.route.navigate(['/login']); // navigate to other page
	}

}
