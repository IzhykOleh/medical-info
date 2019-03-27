import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {buttonClickAction} from "./actions";
import {connect} from "react-redux";

const HomePage =({click, visibility}) => {

		return (
			<div>
				<button onClick={click}>Click me</button>
				<ul>
					<li>Expected text is {visibility.toString()}</li>
				</ul>
			</div>
		);
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		click: () => {
			dispatch(buttonClickAction());
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		visibility: state.ButtonClickReducer.visibility
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(HomePage);

