import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NumbersEffects } from './numbers.effects';

describe('NumbersEffects', () => {
  let actions$: Observable<any>;
  let effects: NumbersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NumbersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NumbersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
