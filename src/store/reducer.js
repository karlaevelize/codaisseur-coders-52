import { combineReducers } from "redux";
import feedSliceReducer from "./postsfeed/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer
});

export default reducer;