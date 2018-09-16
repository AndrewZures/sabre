import { ActionsObservable, ofType } from 'redux-observable';
import { concat as concat$, of as of$ } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { tacoService } from '../../services/tacoService';

import * as tacoActions from '../../actions/tacoActions';

interface Action {
    type: string;
}

export const fetchTacoRecipeEpic = (action$: ActionsObservable<Action>) => {
    return action$.pipe(
        ofType(tacoActions.FETCH_TACO_RECIPE),
        switchMap(_ => {
            return concat$(
             tacoService.fetchTacoRecipe()
             .pipe(
                 map(tacoActions.tacoRecipeReceived),
                 catchError(() => of$({ type: 'SOMETHING WENT TERRIBLE WRONG'}))
             )
            )
        })
    )
}