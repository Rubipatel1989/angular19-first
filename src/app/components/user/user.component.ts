import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @ViewChild('userFormPanel', { static: false }) formPanel!: ElementRef;

  toggleForm() {
    if (this.formPanel) {
      const panel = this.formPanel.nativeElement;
      panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
    }
  }
}
