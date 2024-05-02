import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { Job } from '../Models/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService{
jobs:Job[]=[];
constructor(private http: HttpClient) {
    this.getJobsFromServer();
}
getJobsFromServer() {
    this.http.get("https://localhost:5001/api/Course/GetAllCourses").subscribe((res: any) => this.jobs=res)} 
}
