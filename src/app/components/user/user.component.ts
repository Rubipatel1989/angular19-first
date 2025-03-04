import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  http = inject(HttpClient);
  userList : any []= [];
  isLoading: boolean = false;

  constructor(){
    this.getUsers();
  }
  getUsers(){ 
    this.isLoading = true;
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetAllUsers').subscribe((response: any) => {
      console.log(response);
      if (response.result) {
        console.log(response.data);
        this.userList = response.data;
        this.isLoading = false;
      } else {
        alert(response.message);
      }
    })
  }
  editUser(index: number){
    console.log(index);
  }
  deleteUser(index: number){
    console.log(index);
  }
}
