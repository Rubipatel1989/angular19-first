import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-resource-api',
  imports: [NgFor, NgIf],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
  isLoading = false;
  http = inject(HttpClient);

  userListResource = resource({
    loader: async () => {
      this.isLoading = true;  // Start loading
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json() as any[];
      } finally {
        this.isLoading = false; // Stop loading after fetching
      }
    }
  });

  userList = rxResource({
    loader: () => {
      this.isLoading = true;  // Start loading
      return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
        finalize(() => this.isLoading = false) // Stop loading when the request completes
      );
    }
  });
}

