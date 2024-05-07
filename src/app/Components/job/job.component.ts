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
  constructor(private cvservice: CVComponent) {
    this.jobsList = this.cvservice.jobSelect;
  }
  @Input() job: Job | null = null;
  click: boolean = false;
  myjobfield = jobField;
  MyArea = AREA;
  jobsList: string[] = [];
  IfSend: boolean = false;
  jobArea: any;
  onclick() {
    this.click = !this.click;
  }

  sendCV() {
    this.cvservice.InsertJoB(this.job?.jobName!);
  }
  ifSend() {
    return this.job && this.job.jobName && this.jobsList.includes(this.job.jobName);
  }


}
