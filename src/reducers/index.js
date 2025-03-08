import { gamesReducer } from "./gamesReducer";
import { detailReducer } from "./detailReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default allReducers;
