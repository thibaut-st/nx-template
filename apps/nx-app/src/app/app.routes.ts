import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: () => import('./pages/pages.routes').then(mod => mod.pageRoutes) },
]
