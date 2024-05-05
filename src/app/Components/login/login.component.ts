import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { EventEmitter, Output, } from '@angular/core';
import { User } from '../../Models/User';
import { jobField } from '../../Models/JobField';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userSvc: UserService,private router:Router) { }
  @ViewChild('f') f: any;

  userData: any = { username: '', password: '' };
  flag1: boolean = false;
  flag2: boolean = false;
  check: boolean = false;
  check2: boolean = false;

  contains_heb = (str: string) => {
    return /[\u0590-\u05ff]/.test(str);
  }

  @Output('CourseList') CourseList: EventEmitter<any> = new EventEmitter<any>()
user: User = {
  Id: 0,
  Name: "",
  password: "",
  jobField: jobField.QA
};

loginClick() {
  if (this.f?.valid) 
  {

      this.userSvc.getUser(this.user).subscribe((res: any) => {
          if (res) {
              
             localStorage.setItem("User", JSON.stringify(res));
              this.router.navigate(['jobs'])
            
          }
          else {
              alert('User not found');
            }
          });
       
  }
  else 
  {
      alert("Invalid form");
      
  }
}
}

