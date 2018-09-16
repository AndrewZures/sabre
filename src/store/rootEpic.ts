import { combineEpics } from 'redux-observable';
import { fetchTacoRecipeEpic } from '../domains/examples/epics/tacos/tacoEpics';

// import { exampleEpics } from '../domains/examples/epics/exampleEpics';

export const rootEpic = combineEpics(
    fetchTacoRecipeEpic
)