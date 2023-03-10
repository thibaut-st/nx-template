import {createAction, props} from '@ngrx/store'
import {NxDataEntity} from '../models/nx-data.models'

export const initNxData = createAction('[NxData Page] Init')

export const loadNxDataSuccess = createAction('[NxData/API] Load NxData Success', props<{ nxData: NxDataEntity[] }>())

export const loadNxDataFailure = createAction('[NxData/API] Load NxData Failure', props<{ error: any }>())

export const selectNxDataId = createAction('[NxData/API] Select NxData', props<{ selectedId: string | number }>())

export const addNxData = createAction('[NxData/API] Add NxData', props<{ newNxData: NxDataEntity }>())

export const addNxDataSuccess = createAction('[NxData/API] Add NxData Success', props<{ newNxData: NxDataEntity }>())

export const addNxDataFailure = createAction('[NxData/API] Add NxData Failure', props<{ error: any }>())

export const deleteNxData = createAction('[NxData/API] Delete NxData', props<{ deleteId: string | number }>())

export const deleteNxDataSuccess = createAction('[NxData/API] Delete NxData Success', props<{ deleteId: string | number }>())

export const deleteNxDataFailure = createAction('[NxData/API] Delete NxData Failure', props<{ error: any }>())
