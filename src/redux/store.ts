import { createStore, applyMiddleware, combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import testReducer from "./reducers/testReducer";


export default createStore(combineReducers(testReducer), composeWithDevTools(applyMiddleware(thunk)))