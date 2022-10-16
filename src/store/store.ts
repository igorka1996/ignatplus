import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {ReducerOne} from "./ReducerOne";


const reducers = combineReducers({
    reducerOne: ReducerOne
})


const store = legacy_createStore(reducers, applyMiddleware(thunk))