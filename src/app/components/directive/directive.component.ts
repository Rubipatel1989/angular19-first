import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule],
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
