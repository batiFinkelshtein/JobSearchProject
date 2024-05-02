import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../Models/Job';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
    @Input() job: Job | null = null;
  
    // @Output() updateIsJoinToTrue = new EventEmitter<string>();
    // @Output() updateIsJoinToFalse = new EventEmitter<string>();
    // @Output() addCourse = new EventEmitter<string>();
    // @Output() removeCourse = new EventEmitter<string>();
  

  
}
