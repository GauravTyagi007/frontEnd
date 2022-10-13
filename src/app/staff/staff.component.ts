import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  result:any;
  staff: any = [];
  managers: any = [];

  constructor(private users: UserService) {}

  ngOnInit(): void {
    this.users.getUsers().subscribe((data) => {
      this.result = data;
      console.log(data);
      this.staff=[]
      this.managers=[]
      for (var val of this.result) {
        if (val.role === "manager") {
          this.managers.push(val);
        } else {
          this.staff.push(val);
        }
      }
    });
  }
  update_role(user_id:any){
    this.users.updateByManager(user_id,"manager").subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
  getManagers() {
    this.result = this.managers;
  }

  getStaff() {
    this.result = this.staff;
  }
}
