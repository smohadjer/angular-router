import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
  ],
  template: `
    <h1>Home</h1>
    <p><a routerLink="/products">Products</a></p>
    <p><a [routerLink]="['/products', '1']">Products with id</a></p>
    <p><a routerLink="/products" [queryParams]="{id: '2'}">Products with id</a></p>
    <button (click)="goto('/products', '3')">Go to Products with id</button>

  `,
})
export class HomeComponent {
  constructor(private router: Router) {}

  goto(url: string, id: string) {
    //this.router.navigate([url, { id: id} ]);

    this.router.navigate(
      [url],
      { queryParams: { id: id } }
    );
  }
}
