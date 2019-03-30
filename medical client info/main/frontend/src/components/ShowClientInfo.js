import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {buttonClickAction} from "./actions";
import {connect} from "react-redux";

const ShowClientInfo = ({clients}) => {
	let list_of_clients = "Any clients yet";
	if (clients !== ""){
		list_of_clients = clients.map((client) => {
			return (
			<tr>
				<td>{client.first_name}</td>
				<td>{client.last_name}</td>
			</tr>
			)
		})
		
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>FIRST NAME</th>
							<th>LAST NAME</th>
						</tr>
						{list_of_clients}
					</tbody>
				</table>
			</div>
		)
	}
	else {
		return (
			<div>
				<p>{list_of_clients}</p>
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		clients: state.fetchClientsReducer.clients
	}
}

export default connect(mapStateToProps)(ShowClientInfo);
