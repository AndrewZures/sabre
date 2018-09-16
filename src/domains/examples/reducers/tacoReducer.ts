import * as tacoActions from '../actions/tacoActions';

export const initialExampleState = {
    recipe: null,
}

export function tacoReducer(state: any = initialExampleState, action: any) {
    switch (action.type) {
        case tacoActions.TACO_RECIPE_RECIEVED:
            return {...state, recipe: action.data.recipe}
        default:
            return state;
    }
}
