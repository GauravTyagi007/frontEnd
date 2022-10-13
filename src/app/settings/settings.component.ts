import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  selectedUser:any;
  manager=false;
  constructor(private user:UserService,private router:Router,private route: ActivatedRoute) { }
  ngOnInit(): void {

    // this.user.getUser(localStorage.getItem('id')).subscribe((res)=>{
    //     console.log(res);
        
    //     this.data=res;
    //     if(this.data.role==="manager")
    //       this.manager=true
    //     console.log(this.data.name);
    //    })
     let id = localStorage.getItem('id');
    this.user.getUser(id).subscribe((res)=>{
      console.log(res);
      this.selectedUser=res;
    })
  }
   onSubmit(form:NgForm){
    let user= form.value;
    user['id']=this.selectedUser.id;
    user['name']=this.selectedUser.name;
    user['email']=this.selectedUser.email;
    console.log(user);
    this.user.updateUser(user,user.id).subscribe((res)=>{
      console.log(res);
     this.router.navigate(['/dashboard/cards']); // navigate to other page;
   })
//    go(){
// 	 	this.router.navigate(['/dashboard/cards']); // navigate to other page
  
// }
}
}

