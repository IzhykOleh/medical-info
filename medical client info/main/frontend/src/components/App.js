import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import {createStore} from "redux";
import {Provider} from "react-redux";
import globalReducer from "./reducers";

let store = createStore(globalReducer);

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