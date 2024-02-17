import { combineReducers, createStore } from 'redux'
import userReducer from './userReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({ users: userReducer, products: productReducer })

const store = createStore(rootReducer)
export default store;