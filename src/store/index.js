import rootReducer from "./../reducers/index"
import {createStore,applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise'
var store =createStore(rootReducer,applyMiddleware(promiseMiddleware ));

export default store;