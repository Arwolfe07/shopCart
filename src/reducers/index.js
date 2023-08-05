import { combineReducers } from "redux";
import gamesReducer from "./games";
import gameDetailsReducer from './gameDetails';


export default combineReducers({ gamesReducer,gameDetailsReducer });