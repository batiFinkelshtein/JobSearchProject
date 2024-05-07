import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer, map } from 'rxjs';
import { Job } from '../Models/Job';
import { jobField } from '../Models/JobField';
import { AREA } from '../Models/Area';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs: Job[] = [];
  constructor(private http: HttpClient) {
    this.getJobsFromServer().subscribe(jobs=>this.jobs=jobs);
  }
  getJobsFromServer(): Observable<Job[]> {
    return this.http.get<Job[]>("https://localhost:5001/api/Jobs/GetAllJobs");
  }
  filter_jobs(jobfield:string,area:string): Observable<Job[]> {
    return this.getJobsFromServer().pipe(
      map((res: any) => res.filter((job: any) => {
         return (!jobfield || jobField[job.jobfield] === jobfield) &&
              (!area || AREA[job.area] === area);
      }))
    );
  }
}
