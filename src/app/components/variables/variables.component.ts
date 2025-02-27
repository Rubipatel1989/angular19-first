import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {
  title = 'Hello Variables';
  firstName: string = 'Pawan';
  lastName: string = 'Kumar';
  Age: number = 25;
  Address: string = 'Noida';
  Wife:string;
  currentDate: Date = new Date();
  isActive:Boolean = true;
  Student:any;

  constructor(){
    this.Wife = 'Neha';
    this.Student = {
      name: 'Manoj',
      age: 30
    }
  }
}
