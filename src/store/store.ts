import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from 'redux-observable';

import logger from 'redux-logger';
import { rootEpic } from './rootEpic';
import { rootReducer } from './rootReducer';

// middleware
const epicMiddleware = createEpicMiddleware();
const middleware = applyMiddleware(logger, epicMiddleware);

// store creation
export function configureStore() {
    const store = createStore(rootReducer, middleware);
    epicMiddleware.run(rootEpic);
    return store;
}