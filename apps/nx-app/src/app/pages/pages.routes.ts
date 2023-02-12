import { Route } from '@angular/router'

export default [
  { path: '', redirectTo: 'nx-pages', pathMatch: 'full' },
  { path: 'nx-pages', loadChildren: () => import('./nx-page/nx-page.routes') },
] as Route[]
