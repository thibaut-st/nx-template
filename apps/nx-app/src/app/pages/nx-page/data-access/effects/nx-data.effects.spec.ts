import {TestBed} from '@angular/core/testing'
import {provideMockActions} from '@ngrx/effects/testing'
import {Action} from '@ngrx/store'
import {provideMockStore} from '@ngrx/store/testing'
import {hot} from 'jasmine-marbles'
import {Observable} from 'rxjs'

import * as NxDataActions from '../actions/nx-data.actions'
import {NxDataEffects} from './nx-data.effects'

describe('NxDataEffects', () => {
  let actions: Observable<Action>
  let effects: NxDataEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [NxDataEffects, provideMockActions(() => actions), provideMockStore()],
    })

    effects = TestBed.inject(NxDataEffects)
  })

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {a: NxDataActions.initNxData()})

      const expected = hot('-a-|', {a: NxDataActions.loadNxDataSuccess({nxData: []})})

      expect(effects.init$).toBeObservable(expected)
    })
  })
})
