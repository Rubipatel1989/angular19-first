import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
