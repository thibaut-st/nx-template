import { Route } from '@angular/router'
import { NxFeatureComponent } from './feature/nx-feature/nx-feature.component'

export default [
  { path: '', redirectTo: 'nx-feature', pathMatch: 'full' },
  { path: 'nx-feature', component: NxFeatureComponent },
] as Route[]
