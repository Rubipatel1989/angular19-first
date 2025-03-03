import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-call',
  imports: [FormsModule, NgFor],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})
export class ApiCallComponent {
  http = inject(HttpClient);
  jsonUsers: any [] = [];
  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      console.log(response);
      this.jsonUsers = response;
    });
  }
}
