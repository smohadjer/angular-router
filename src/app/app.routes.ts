import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProductsComponent } from './products.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component'
import { RouteOptionalParamsComponent } from './route-optional-params.component';
import { RouteRequiredParamsComponent } from './route-required-params.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    title: 'Products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    title: 'Products',
    component: ProductsComponent
  },
  {
    path: 'home',
    title: 'My home page',
    component: HomeComponent
  },
  {
    path: 'test',
    title: 'My test page',
    component: TestComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent
      },
      {
        path: 'child-b',
        component: ChildBComponent
      },
    ]
  },
  {
    path: 'route-optional-params', // example of a route with optional parameters
    component: RouteOptionalParamsComponent
  },
  {
    path: 'route-required-params/:name/:age', // example of a route with required parameters
    component: RouteRequiredParamsComponent
  },
  {
    path: '**',
    title: 'Not Found',
    component: NotFoundComponent
  }
];
