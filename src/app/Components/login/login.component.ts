import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { EventEmitter, Output, } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('f') f: any;

  userData: any = { username: '', password: '' };
  flag1: boolean = false;
  flag2: boolean = false;
  check: boolean = false;
  check2: boolean = false;

  contains_heb = (str: string) => {
    return /[\u0590-\u05ff]/.test(str);
  }

  loginClick = () => {
    this.check2=true
    if (this.userData.username !== '' && this.contains_heb(this.userData.username)) {
      this.flag1 = true;
    } else {
      this.flag1 = false;
      alert('Invalid name');
    }

    if (this.userData.password.length === 8 && !isNaN(Number(this.userData.password))) {
      this.flag2 = true;
    } else {
      this.flag2 = false;
      alert('Invalid password');
    }

    if (this.flag1 && this.flag2) {
      this.check = true;
    }
  }
  @Output('CourseList') CourseList: EventEmitter<any> = new EventEmitter<any>()
}

