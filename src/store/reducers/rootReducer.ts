import { combineReducers } from "redux";

// domain reducers
import { exampleReducer } from "../../domains/examples/reducers/exampleReducer";

export const rootReducer = combineReducers({
    examples: exampleReducer,
})