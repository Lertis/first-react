import counterReducer from "./counter.reducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	counter: counterReducer
});

export default allReducers;