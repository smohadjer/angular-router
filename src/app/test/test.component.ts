import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <h1>Test</h1>
    <p><a routerLink="">Back to Home (via redirect)</a></p>

    @if (name) {
      <p>My name is {{name}}.</p>
    }

    @if (job) {
      <p>My job is {{job}}.</p>
    }

    <nav>
      <ul>
        <li><a routerLink="child-a">Child A</a></li>
        <li><a routerLink="child-b">Child B</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: ``
})
export class TestComponent {
  @Input() name!: string;
  @Input() job!: string;
}
