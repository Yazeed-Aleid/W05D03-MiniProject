import { createStore, combineReducers } from "redux";
import searchReducer from './SearchReducer'
import WatchLaterReducer from "./WatchLater";
const reducers = combineReducers({searchReducer,WatchLaterReducer})
const store = createStore(reducers);

export default store;