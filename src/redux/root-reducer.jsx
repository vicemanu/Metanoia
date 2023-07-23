import { combineReducers } from "redux";
import dataSlice  from "./data/slice";



export default combineReducers({
    data: dataSlice,
})