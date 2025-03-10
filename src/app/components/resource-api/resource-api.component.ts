import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api',
  imports: [NgFor],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
  http = inject(HttpClient);

  userListResource = resource({
    loader: () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json() as Promise<any[]>)
    }
  });

  userList = rxResource({
    loader: () => {
      return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
    }
  });

}
