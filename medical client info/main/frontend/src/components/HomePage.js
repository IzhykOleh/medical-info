import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {buttonClickAction} from "./actions";
import {connect} from "react-redux";
import CreateClientForm from "./CreateClientForm";
import ShowClientInfo from './ShowClientInfo';

const HomePage =() => {
		return (
			<div>
				<CreateClientForm/>
				<ShowClientInfo/>
			</div>
		);
}

export default HomePage;
