import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as NumbersActions from '../actions/numbers.actions';


@Injectable()
export class NumbersEffects {

  loadNumberss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NumbersActions.loadNumberss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => NumbersActions.loadNumberssSuccess({ data })),
          catchError(error => of(NumbersActions.loadNumberssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
