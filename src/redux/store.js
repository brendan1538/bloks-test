import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { pageReducer } from './reducers/pageReducer';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(pageReducer, middleware);