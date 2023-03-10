import {Action} from '@ngrx/store'

import * as NxDataActions from '../actions/nx-data.actions'
import {NxDataEntity} from '../models/nx-data.models'
import {NxDataState, initialNxDataState, nxDataReducer} from './nx-data.reducer'

describe('NxData Reducer', () => {
  const createNxDataEntity = (id: string, name = ''): NxDataEntity => ({
    id,
    name: name || `name-${id}`,
  })

  describe('valid NxData actions', () => {
    it('loadNxDataSuccess should return the list of known NxData', () => {
      const nxData = [createNxDataEntity('PRODUCT-AAA'), createNxDataEntity('PRODUCT-zzz')]
      const action = NxDataActions.loadNxDataSuccess({nxData})

      const result: NxDataState = nxDataReducer(initialNxDataState, action)

      expect(result.loaded).toBe(true)
      expect(result.ids.length).toBe(2)
    })
  })

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action

      const result = nxDataReducer(initialNxDataState, action)

      expect(result).toBe(initialNxDataState)
    })
  })
})
