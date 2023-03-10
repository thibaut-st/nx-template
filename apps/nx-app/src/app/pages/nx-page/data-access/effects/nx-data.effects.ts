import {inject, Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'

import * as NxDataActions from '../actions/nx-data.actions'

import {catchError, delay, map, of, switchMap} from 'rxjs'
import {NxDataService} from '../services/nx-data.service'
import {NxDataEntity} from '../models/nx-data.models'

@Injectable()
export class NxDataEffects {
  private actions$ = inject(Actions)

  constructor(private nxDataService: NxDataService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NxDataActions.initNxData),
      delay(1000),
      switchMap(() =>
        this.nxDataService
          .getNxData()
          .pipe(map((nxDataList: NxDataEntity[]) => NxDataActions.loadNxDataSuccess({nxData: nxDataList})))
      ),
      catchError(error => {
        console.error('Error', error)
        return of(NxDataActions.loadNxDataFailure({error}))
      })
    )
  )

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NxDataActions.addNxData),
      switchMap(action =>
        this.nxDataService
          .addNxData(action.newNxData)
          .pipe(map((newNxData: NxDataEntity) => NxDataActions.addNxDataSuccess({newNxData})))
      ),
      catchError(error => {
        console.error('Error', error)
        return of(NxDataActions.addNxDataFailure({error}))
      })
    )
  )
}
