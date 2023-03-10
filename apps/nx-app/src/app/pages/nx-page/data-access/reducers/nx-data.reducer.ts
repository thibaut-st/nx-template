import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import {Action, createReducer, on} from '@ngrx/store'

import * as NxDataActions from '../actions/nx-data.actions'
import {NxDataEntity} from '../models/nx-data.models'

export const NX_DATA_FEATURE_KEY = 'nxData'

export interface NxDataState extends EntityState<NxDataEntity> {
  selectedId?: string | number // which NxData record has been selected
  loaded: boolean // has the NxData list been loaded
  loading: boolean // is the NxData loading
  error?: string | null // last known error (if any)
}

export interface NxDataPartialState {
  readonly [NX_DATA_FEATURE_KEY]: NxDataState
}

export const nxDataAdapter: EntityAdapter<NxDataEntity> = createEntityAdapter<NxDataEntity>()

export const initialNxDataState: NxDataState = nxDataAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  loading: false,
})

const reducer = createReducer(
  initialNxDataState,
  on(NxDataActions.initNxData, state => ({...state, loaded: false, loading: true, error: null})),
  on(NxDataActions.loadNxDataSuccess, (state, {nxData}) =>
    nxDataAdapter.setAll(nxData, {
      ...state,
      loaded: true,
      loading: false,
    })
  ),
  on(NxDataActions.loadNxDataFailure, (state, {error}) => ({...state, error})),
  on(NxDataActions.selectNxDataId, (state, {selectedId}) => ({
    ...state,
    selectedId: selectedId,
  })),
  on(NxDataActions.addNxDataSuccess, (state, {newNxData}) => nxDataAdapter.addOne(newNxData, state)),
  on(NxDataActions.addNxDataFailure, (state, {error}) => ({...state, error})),
  on(NxDataActions.deleteNxDataSuccess, (state, {deleteId}) => nxDataAdapter.removeOne(Number(deleteId), state)),
  on(NxDataActions.deleteNxDataFailure, (state, {error}) => ({...state, error}))
)

export function nxDataReducer(state: NxDataState | undefined, action: Action) {
  return reducer(state, action)
}
