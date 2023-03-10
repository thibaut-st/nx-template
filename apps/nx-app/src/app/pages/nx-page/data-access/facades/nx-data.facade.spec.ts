import {NgModule} from '@angular/core'
import {TestBed} from '@angular/core/testing'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule, Store} from '@ngrx/store'
import {readFirst} from '@nrwl/angular/testing'

import * as NxDataActions from '../actions/nx-data.actions'
import {NxDataEffects} from '../effects/nx-data.effects'
import {NxDataFacade} from './nx-data.facade'
import {NxDataEntity} from '../models/nx-data.models'
import {NX_DATA_FEATURE_KEY, NxDataState, initialNxDataState, nxDataReducer} from '../reducers/nx-data.reducer'
import * as NxDataSelectors from '../selectors/nx-data.selectors'

interface TestSchema {
  nxData: NxDataState
}

describe('NxDataFacade', () => {
  let facade: NxDataFacade
  let store: Store<TestSchema>
  const createNxDataEntity = (id: string, name = ''): NxDataEntity => ({
    id,
    name: name || `name-${id}`,
  })

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(NX_DATA_FEATURE_KEY, nxDataReducer),
          EffectsModule.forFeature([NxDataEffects]),
        ],
        providers: [NxDataFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({imports: [RootModule]})

      store = TestBed.inject(Store)
      facade = TestBed.inject(NxDataFacade)
    })

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allNxData$)
      let isLoaded = await readFirst(facade.loaded$)

      expect(list.length).toBe(0)
      expect(isLoaded).toBe(false)

      facade.init()

      list = await readFirst(facade.allNxData$)
      isLoaded = await readFirst(facade.loaded$)

      expect(list.length).toBe(0)
      expect(isLoaded).toBe(true)
    })

    /**
     * Use `loadNxDataSuccess` to manually update list
     */
    it('allNxData$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allNxData$)
      let isLoaded = await readFirst(facade.loaded$)

      expect(list.length).toBe(0)
      expect(isLoaded).toBe(false)

      store.dispatch(
        NxDataActions.loadNxDataSuccess({
          nxData: [createNxDataEntity('AAA'), createNxDataEntity('BBB')],
        })
      )

      list = await readFirst(facade.allNxData$)
      isLoaded = await readFirst(facade.loaded$)

      expect(list.length).toBe(2)
      expect(isLoaded).toBe(true)
    })
  })
})
