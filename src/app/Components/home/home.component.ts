import { Component } from '@angular/core';
import { CVComponent } from '../../services/cv.services';
import { JobListComponent } from '../job-list/job-list.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private cvService: CVComponent){

  }
  nameUser:string |undefined|null
  ngOnInit(): void {
// this.nameUser=localStorage.getItem('name');
this.nameUser='bati'
  }
getCount(){
return this.cvService.CountRegister()
  }

}
