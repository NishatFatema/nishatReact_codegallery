
import { createStore, combineReducers  } from "redux";
import { groupReducer } from "../Reducers/groupReducer";
import { empReducer } from "../Reducers/EmpDetailReducer";

export const configStore=()=>{
       const store=createStore(
                combineReducers({ groupReducer,empReducer }),

         window.__REDUX_DEVTOOLS_EXTENSION__&& 
         window.__REDUX_DEVTOOLS_EXTENSION__()     
       )
       return store;
}