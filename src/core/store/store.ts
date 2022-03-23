import { applyMiddleware, combineReducers, createStore } from 'redux'
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
    appState: appReducer
})

const store = createStore(rootReducer, applyMiddleware());
export default store