import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  http = inject(HttpClient);
  userList : any []= [];
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
  onSaveUser(){
    console.log("Request:", this.userObj);
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewUser', this.userObj).subscribe((response: any) => {
      console.log(response);
      if(response.result){
        this.getUsers();
      } else{
        alert(response.message);
      } 
    });
  }
  editUser(data:any){
    this.userObj = data;
    console.log(data);
  }
  OndeleteUser(index: number){
    if(confirm('Are you sure you want to delete this user?')){
      this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeleteUserByUserId?userId='+index).subscribe((response: any) => {
        console.log(response);
        this.getUsers();
      });
    }
    
  }
  onUpdteUser(){
    console.log(this.userObj);
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateUser', this.userObj).subscribe((response: any) => {
      console.log(response);
      this.getUsers();
    });
  }
}
