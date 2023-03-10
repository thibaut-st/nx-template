import {inject, Injectable} from '@angular/core'
import {select, Store} from '@ngrx/store'

import * as NxDataActions from '../actions/nx-data.actions'
import * as NxDataSelectors from '../selectors/nx-data.selectors'
import {NxDataEntity} from '../models/nx-data.models'

@Injectable()
export class NxDataFacade {
  private readonly store = inject(Store)

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(NxDataSelectors.selectNxDataLoaded))
  loading$ = this.store.pipe(select(NxDataSelectors.selectNxDataLoading))
  allNxData$ = this.store.pipe(select(NxDataSelectors.selectAllNxData))
  selectedNxData$ = this.store.pipe(select(NxDataSelectors.selectEntity))

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(NxDataActions.initNxData())
  }

  select(id: string | number) {
    this.store.dispatch(NxDataActions.selectNxDataId({selectedId: id}))
  }

  addNxData(newNxData: NxDataEntity) {
    this.store.dispatch(NxDataActions.addNxData({newNxData: newNxData}))
  }
}
