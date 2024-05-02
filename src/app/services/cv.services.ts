import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CVComponent{
jobSelect:string[]=[];
InsertJoB(nameCompany:string){
    this.jobSelect.push(nameCompany);
}
CountRegister(){
    return this.jobSelect.length;
}

}
