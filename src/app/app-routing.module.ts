import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { JobComponent } from './Components/job/job.component';
import { JobListComponent } from './Components/job-list/job-list.component';
const routes: Routes = [
  {path:'',component:HomeComponent, children:[
    {path:'',component:JobListComponent},
    {path:'jobs',component:JobListComponent,children:[{path:':field',component:JobListComponent}]},
    ]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
