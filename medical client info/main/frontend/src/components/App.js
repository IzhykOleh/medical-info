import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import globalReducer from "./reducers";
import thunk from 'redux-thunk';
import {fetchAllClients} from "./actions"; 

// redux-thunk це штука, яка робить одне: заставляє метод dispatch розуміти не тільки 
// actions, але й приймати функції на вхід, всередині цих функцій доступний метод
// dispatch, тому ти можеш всередині них диспетчити простіший action creator, який власне
// поверне саму дію (action)
let store = createStore(globalReducer, applyMiddleware(thunk));

store.dispatch(fetchAllClients());

const App = () => {
  return (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={HomePage}/>
			</Switch>
		</BrowserRouter>
	</Provider>
  );
};

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App/>, wrapper): null;