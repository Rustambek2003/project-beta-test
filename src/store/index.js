import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { actionReducer } from './actions'



const rootReducers = combineReducers({
    about:actionReducer,
   
})


const store = configureStore({
    reducer:rootReducers,
})
export default store