import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../Models/Job';
import { jobField } from '../../Models/JobField';
import { CVComponent } from '../../services/cv.services';
import { AREA } from '../../Models/Area';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  constructor(private cvservice: CVComponent ) {
    
  }
    @Input() job: Job | null = null;
  click:boolean=false;
  myjobfield=jobField;
  MyArea=AREA;
jobArea: any;
  onclick(){
this.click=!this.click;
  }
    // @Output() updateIsJoinToTrue = new EventEmitter<string>();
    // @Output() updateIsJoinToFalse = new EventEmitter<string>();
    // @Output() addCourse = new EventEmitter<string>();
    // @Output() removeCourse = new EventEmitter<string>();
    sendCV() 
  {
    this.cvservice.InsertJoB(this.job?.jobName!);
  }

 
  
}
