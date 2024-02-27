import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'router-app';
  //router: Router = inject(Router);

  constructor(private router: Router) {}

  // example of navigating to a page via javascript
  gotoPage(url: string) {
    this.router.navigate([url], {
      queryParams: {
        name: 'Saeid',
        job: 'Developer'
      }
    });
  }
}
