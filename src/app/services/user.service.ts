import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(user: User) {
    const url=`https://localhost:5001/api/User?name=${user.Name}&password=${user.password}`;
    return this.http.get(url);
  }
  

}
