import {NxDataEntity} from '../models/nx-data.models'
import {nxDataAdapter, NxDataPartialState, initialNxDataState} from '../reducers/nx-data.reducer'
import * as NxDataSelectors from './nx-data.selectors'

describe('NxData Selectors', () => {
  const ERROR_MSG = 'No Error Available'
  const getNxDataId = (it: NxDataEntity) => it.id
  const createNxDataEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as NxDataEntity)

  let state: NxDataPartialState

  beforeEach(() => {
    state = {
      nxData: nxDataAdapter.setAll(
        [createNxDataEntity('PRODUCT-AAA'), createNxDataEntity('PRODUCT-BBB'), createNxDataEntity('PRODUCT-CCC')],
        {
          ...initialNxDataState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    }
  })

  describe('NxData Selectors', () => {
    it('selectAllNxData() should return the list of NxData', () => {
      const results = NxDataSelectors.selectAllNxData(state)
      const selId = getNxDataId(results[1])

      expect(results.length).toBe(3)
      expect(selId).toBe('PRODUCT-BBB')
    })

    it('selectEntity() should return the selected Entity', () => {
      const result = NxDataSelectors.selectEntity(state) as NxDataEntity
      const selId = getNxDataId(result)

      expect(selId).toBe('PRODUCT-BBB')
    })

    it('selectNxDataLoaded() should return the current "loaded" status', () => {
      const result = NxDataSelectors.selectNxDataLoaded(state)

      expect(result).toBe(true)
    })

    it('selectNxDataError() should return the current "error" state', () => {
      const result = NxDataSelectors.selectNxDataError(state)

      expect(result).toBe(ERROR_MSG)
    })
  })
})
