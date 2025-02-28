import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  title: string = 'Template Driven Form';
  userForm: any = {
    fName: '',
    lName: '',
    username: '',
    city: '',
    state: '',
    zipCode: '',
    isActive: false
  }
  onSaveUser() {
    const formValue = this.userForm;
    console.log(this.userForm);
  }
}
