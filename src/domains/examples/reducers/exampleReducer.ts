import * as exampleActions from '../actions/exampleActions';

export const initialExampleState = {
    count: 0,
}

export function exampleReducer(state: any = initialExampleState, action: any) {
    switch (action.type) {
        case exampleActions.INCREMENT:
            return {...state, count: state.count + 1 }
        case exampleActions.DECREMENT:
            return {...state, count: state.count - 1 }
        default:
            return state;
    }
}
