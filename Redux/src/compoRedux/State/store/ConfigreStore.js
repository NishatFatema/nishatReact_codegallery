import { createStore, combineReducers } from "redux";
import {groupReducer} from "../Reducers/groupReducer";

export const ConfigreStore=()=>{
    const store = createStore(
                 combineReducers({
                     groupReducer,
                 }),
                 window.__REDUX_DEVTOOLS_EXTENSION__&& windows.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
}