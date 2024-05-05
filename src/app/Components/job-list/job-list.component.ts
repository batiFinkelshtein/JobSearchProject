import { Component, Input } from '@angular/core';
import { JobService } from '../../services/job.services';
import { Job } from '../../Models/Job';
import { ActivatedRoute, Router  } from '@angular/router';
import { jobField } from '../../Models/JobField';
import { FormsModule } from '@angular/forms';
import { AREA } from '../../Models/Area';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
onSelected(arg0: string) {
throw new Error('Method not implemented.');
}

  @Input() allJobs:Job[]=[]
area:String |undefined;
jobField:String | undefined;
    constructor(private jobSvc: JobService,private _router: Router, private activeRouter: ActivatedRoute){
  
    }
  ngOnInit():void{
    this.allJobs=this.jobSvc.jobs;
    this.activeRouter.paramMap.subscribe(params => { 
      
   let jobField=params.get('Jobfield');
   alert(jobField)
   if(jobField!=null)
   this.changeArea(jobField,"center")
      })





  }
    getAreas(){
   
    
      return Object.values(AREA).filter(t=> Number.isNaN(Number(t)))
    
   }
   getFields() {
    return Object.keys(jobField).filter((v) => isNaN(Number(v)));
  }
 
 changeArea(area:String,jobfield:String){
  alert('i in filter')
 this.allJobs=this.jobSvc.filter_jobs(area,jobfield)


 }
}
