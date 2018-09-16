import { combineReducers } from "redux";

// domain reducers
import { exampleReducer } from "../domains/examples/reducers/exampleReducer";
import { tacoReducer } from '../domains/examples/reducers/tacoReducer';

export const rootReducer = combineReducers({
    examples: exampleReducer,
    tacos: tacoReducer,
})