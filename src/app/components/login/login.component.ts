import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: userLogin = new userLogin();
}
export class userLogin{
  userName: string;
  password: string;

  constructor(){
    this.userName = '',
    this.password = ''
  }
}