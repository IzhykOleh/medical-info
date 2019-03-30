import React from "react";
import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';

const fetchClientsReducer = (state = {clients: ""}, action) => {
	switch (action.type) {
		case "FETCH_CLIENTS":
			return {clients: action.clients};
		default:
			return state;
	}
}

const globalReducer = combineReducers({
		fetchClientsReducer,
		form: formReducer
	})

export default globalReducer;
