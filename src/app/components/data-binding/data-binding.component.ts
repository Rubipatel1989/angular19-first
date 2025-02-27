import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = 'Angular 19';
  courseDuration: string = '3 months';
  clsName = 'col-3';
  placeholder = 'Enter course name';
  isActive: boolean = true;

  showAlert(){
    alert('Alert from data binding');
  }
  showMessage(message: string){
    alert(message);
  }
 
}
