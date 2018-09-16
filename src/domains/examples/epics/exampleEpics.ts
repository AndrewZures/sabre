import { fetchTacoRecipeEpic } from "./tacos/tacoEpics";

import { combineEpics } from "redux-observable";


export const exampleEpics = combineEpics(
    fetchTacoRecipeEpic,
)