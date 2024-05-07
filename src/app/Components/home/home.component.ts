import { Component } from '@angular/core';
import { CVComponent } from '../../services/cv.services';
import { JobListComponent } from '../job-list/job-list.component';
import { jobField } from '../../Models/JobField';
import { json } from 'stream/consumers';
import { FormsModule } from '@angular/forms';
import { BoldNameDirective } from '../../directives/bold-name.directive';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  JobsSelect: string[] = [];
  constructor(private cvService: CVComponent) {
    this.JobsSelect = this.cvService.jobSelect;
  }
  jobfield: string | undefined;
  nameUser: string | undefined | null
  ngOnInit(): void {
    this.nameUser = this.GetUser().name;

  }
  getCount() {
    return this.cvService.CountRegister()
  }
  GetjobField() {
    return jobField[this.GetUser().jobField]
  }
  GetUser() {
    return JSON.parse(localStorage.getItem('User')!)
  }
}
