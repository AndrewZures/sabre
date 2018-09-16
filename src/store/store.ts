import { applyMiddleware, createStore } from "redux";
import { rootReducer } from './reducers/rootReducer';

// middleware
import logger from 'redux-logger';

const middleware = applyMiddleware(logger);
export const store = createStore(rootReducer, middleware);