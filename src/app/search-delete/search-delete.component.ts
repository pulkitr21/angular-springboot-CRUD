import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  id:number;

  constructor(private service:UserRegistrationService) { }

  public removeUser(id:number){
    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=>{this.users=data});
  }

  public findUserByEmail(){
    let resp=this.service.getUserByEmail(this.id)
    resp.subscribe((data)=>{this.users=data});
  }

  ngOnInit() {
    let response=this.service.getUsers();
    response.subscribe((data)=>{
      this.users=data;
    })
  }

}
