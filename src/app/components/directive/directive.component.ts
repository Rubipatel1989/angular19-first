import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  title = "Hello Directive [NgIf, NgFor]";
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  num1 = 0;
  num2 = 0;
  selectedCaste = '';
  cityList: string[] = ['Noida', 'Gurgaon', 'Delhi', 'Mumbai'];
  studentList: any[] = [
    {
      name: 'Pawan',
      city: 'Noida',
      grade: 'A',
      isActive: true
    },
    {
      name: 'Manoj',
      city: 'Delhi',
      grade: 'A+',
      isActive: false
    },
    {
      name: 'Sonu',
      city: 'Pune',
      grade: 'A++',
      isActive: true
    },
    {
      name: 'Chintu',
      city: 'Aung',
      grade: 'B',
      isActive: true
    },
    {
      name: 'Rani',
      city: 'Bindki',
      grade: 'B+',
      isActive: true
    }
    
  ]
  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }

  hideShowDiv2(isDisplay: boolean) {
    this.isDiv2Visible = isDisplay;
  }
}
