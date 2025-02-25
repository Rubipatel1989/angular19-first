import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // private router = inject(Router);
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
  // navigate() {
  //   this.router.navigate(['/about']);
  // }
}
