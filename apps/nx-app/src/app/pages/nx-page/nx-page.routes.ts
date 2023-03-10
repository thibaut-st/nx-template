import {Route} from '@angular/router'
import {NxFeatureComponent} from './feature/nx-feature/nx-feature.component'
import {provideState} from '@ngrx/store'
import {provideEffects} from '@ngrx/effects'
import * as fromNxData from './data-access/reducers/nx-data.reducer'
import {NxDataEffects} from './data-access/effects/nx-data.effects'
import {NxDataFacade} from './data-access/facades/nx-data.facade'
import {NxFeatureNgrxComponent} from './feature/nx-feature-ngrx/nx-feature-ngrx.component'

export const nxPageRoutes: Route[] = [
  {path: '', redirectTo: 'nx-feature', pathMatch: 'full'},
  {
    path: '',
    providers: [
      NxDataFacade,
      provideState(fromNxData.NX_DATA_FEATURE_KEY, fromNxData.nxDataReducer),
      provideEffects(NxDataEffects),
    ],
    children: [
      {path: 'nx-feature', component: NxFeatureComponent},
      {path: 'nx-feature-ngrx', component: NxFeatureNgrxComponent},
    ],
  },
]
