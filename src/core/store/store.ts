import { applyMiddleware, createStore } from 'redux'
import { appReducer } from './reducers/appReducer';

const store = createStore(appReducer, applyMiddleware());

export default store