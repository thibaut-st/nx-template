import { createAction, props } from '@ngrx/store';

export const loadNumberss = createAction(
  '[Numbers] Load Numberss'
);

export const loadNumberssSuccess = createAction(
  '[Numbers] Load Numberss Success',
  props<{ data: any }>()
);

export const loadNumberssFailure = createAction(
  '[Numbers] Load Numberss Failure',
  props<{ error: any }>()
);
