import {Route} from '@angular/router'

export const pageRoutes: Route[] = [
  {path: '', redirectTo: 'nx-pages', pathMatch: 'full'},
  {path: 'nx-pages', loadChildren: () => import('./nx-page/nx-page.routes').then(mod => mod.nxPageRoutes)},
]
