import { rootReducer } from './reducers/index';
import { applyMiddleware, createStore } from 'redux'

export const store = createStore(rootReducer, applyMiddleware());