import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activatedroute',
  standalone: true,
  imports: [
    NgFor
  ],
  template: `
    <h1>ActivatedRoute</h1>
    <p>Any parameter you add to the url will be displayed below:</p>
    <ul *ngFor="let param of params;">
      <li>{{param}}</li>
    </ul>
  `,
  styles: ``
})
export class RouteRequiredParamsComponent {
  params: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.params = Object.entries(params);
    });
  }
}
