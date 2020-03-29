import { Component, OnInit } from '@angular/core';
import { UserservService } from '../userserv.service';


@Component({
  selector: 'app-userapp',
  templateUrl: './userapp.component.html',
  styleUrls: ['./userapp.component.scss']
})
export class UserappComponent implements OnInit {

  constructor(private userServ:UserservService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userServ.getListOfUsers().subscribe((data:any)=>{

      if(data.code === 200){
        console.log("Success",data)
      }


    })
  }

}
