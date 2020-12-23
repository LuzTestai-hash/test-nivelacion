import { combineReducers } from "redux";
import todo from './todo'
import comment from './comment'
export default combineReducers({ todo, comment });
