import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-reactive',
  imports: [FormsModule, NgIf],
  templateUrl: './user-reactive.component.html',
  styleUrl: './user-reactive.component.css'
})
export class UserReactiveComponent {
  http = inject(HttpClient);
  isLoading: boolean = false;
  userObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  };
  userList : any []= [];
  constructor(){
    this.getUsers();
  }
  getUsers(){ 
    this.isLoading = true;
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetAllUsers').subscribe((response: any) => {
      console.log(response);
      if (response.result) {
        this.userList = response.data;
        this.isLoading = false;
      } else {
        alert(response.message);
      }
    })
  }


  onSaveUser(){};
  onUpdteUser(){};
  editUser(data:any){};
  OndeleteUser(index: number){};
    
}
