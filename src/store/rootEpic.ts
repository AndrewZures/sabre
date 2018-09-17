import { combineEpics } from 'redux-observable';
import { fetchTacoRecipeEpic } from '../domains/examples/epics/tacos/tacoEpics';

export const rootEpic = combineEpics(
    fetchTacoRecipeEpic
)