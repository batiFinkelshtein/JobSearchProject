import { Component, Input } from '@angular/core';
import { JobService } from '../../services/job.services';
import { Job } from '../../Models/Job';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

  @Input() allJobs:Job[]=[]
    constructor(private jobSvc: JobService,private _router: Router, private activeRouter: ActivatedRoute){
    }
  ngOnInit():void{
    this.allJobs=this.jobSvc.jobs}
   
 
}
