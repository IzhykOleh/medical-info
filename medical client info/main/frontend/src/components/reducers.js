import React from "react";
import {combineReducers} from "redux";

const ButtonClickReducer = (state = {visibility: true}, action) => {
	if (action.type === 'buttonClickAction'){
		return Object.assign({}, state, {visibility: !state.visibility})
	}
	return state;
}

const globalReducer = combineReducers({ButtonClickReducer})

export default globalReducer;
