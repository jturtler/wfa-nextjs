import { combineReducers } from "redux";
import CountReducer from "./CountReducer";

const rootReducer = combineReducers({
	abdaf: CountReducer
});

export default rootReducer;