import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNumbers from '../reducers/numbers.reducer';

export const selectNumbersState = createFeatureSelector<fromNumbers.State>(
  fromNumbers.numbersFeatureKey
);
