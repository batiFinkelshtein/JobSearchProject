import { Component, Input } from '@angular/core';
import { JobService } from '../../services/job.services';
import { Job } from '../../Models/Job';
import { ActivatedRoute, Router } from '@angular/router';
import { jobField } from '../../Models/JobField';
import { AREA } from '../../Models/Area';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  public allJobs: Job[] = [];
  public jobs: Job[] = [];
  public flag = false
  constructor(private jobSvc: JobService, private _router: Router, private activeRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    if (localStorage.getItem('User') == null)
      this._router.navigate(['/login']);

    this.jobSvc.getJobsFromServer().subscribe(Arrjobs => { this.allJobs = Arrjobs })
    this.activeRouter.paramMap.subscribe(params => {
      let jobFfield = params.get('Jobfield');
      if (jobFfield != null)
        this.change(jobFfield, "")
    })
  }
  getAreas() {
    return Object.keys(AREA).filter((v) => isNaN(Number(v)));
  }


  getFields() {
    return Object.keys(jobField).filter((v) => isNaN(Number(v)));
  }

  change(jobfield: string, area: string) {
    this.jobSvc.filter_jobs(jobfield, area).subscribe(jobs => {
      this.allJobs = jobs;

    });
    //  this._router.navigate([`/jobs/${jobfield}`])


  }
}
