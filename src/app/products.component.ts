import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  template: `
    <h1>Products</h1>
    @if (id) {
      <p>{{getProduct(id)}}</p>
    } @else {
      <ul *ngFor="let product of products">
        <li>{{product.name}}</li>
      </ul>
    }
  `
})
export class ProductsComponent {
    @Input() id: string | undefined;
    products = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Pear' }
    ]

    getProduct(id: string) {
      const product = this.products.find(item => item.id === Number(id));
      return product ? product.name : `No product found for id: ${id}`;
    }
}
