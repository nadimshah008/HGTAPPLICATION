import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserappComponent } from './userapp/userapp.component';


const routes: Routes = [{path:'',component:UserappComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
