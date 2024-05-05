import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { Job } from '../Models/Job';
import { jobField } from '../Models/JobField';

@Injectable({
  providedIn: 'root'
})
export class JobService{
jobs:Job[]=[];
constructor(private http: HttpClient) {
    this.getJobsFromServer();
}
getJobsFromServer() {
    this.http.get("https://localhost:5001/api/Jobs/GetAllJobs").subscribe((res: any) => this.jobs=res)} 
filter_jobs(area:String,jobfield:String){
 return this.jobs.filter((job=>String(job.jobfield)==jobfield&&String(job.area)==area ))
}
}
