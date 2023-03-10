import {createFeatureSelector, createSelector} from '@ngrx/store'
import {NX_DATA_FEATURE_KEY, nxDataAdapter, NxDataState} from '../reducers/nx-data.reducer'

// Lookup the 'NxData' feature state managed by NgRx
export const selectNxDataState = createFeatureSelector<NxDataState>(NX_DATA_FEATURE_KEY)

const {selectAll, selectEntities} = nxDataAdapter.getSelectors()

export const selectNxDataLoaded = createSelector(selectNxDataState, (state: NxDataState) => state.loaded)

export const selectNxDataLoading = createSelector(selectNxDataState, (state: NxDataState) => state.loading)

export const selectNxDataError = createSelector(selectNxDataState, (state: NxDataState) => state.error)

export const selectAllNxData = createSelector(selectNxDataState, (state: NxDataState) => selectAll(state))

export const selectNxDataEntities = createSelector(selectNxDataState, (state: NxDataState) => selectEntities(state))

export const selectSelectedId = createSelector(selectNxDataState, (state: NxDataState) => state.selectedId)

export const selectEntity = createSelector(selectNxDataEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
)
