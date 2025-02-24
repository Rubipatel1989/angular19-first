import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Pawan Kumar Studying Angular';
  constructor() {
    console.log('Constructor');
  }
  ngOnInit(): void {
    console.log('On Init');
  }
  changeTitle() {
    this.title = 'Pawan Kumar Studying Angular that is great';
  }
}
