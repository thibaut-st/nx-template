import { Action, createReducer, on } from '@ngrx/store';
import * as NumbersActions from '../actions/numbers.actions';

export const numbersFeatureKey = 'numbers';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(NumbersActions.loadNumberss, state => state),
  on(NumbersActions.loadNumberssSuccess, (state, action) => state),
  on(NumbersActions.loadNumberssFailure, (state, action) => state),

);
