import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {createClientSubmit, fetchAllClients, ButtonClickSubmit} from "./actions";
import {connect} from "react-redux";
import { Field, reduxForm } from 'redux-form';


let RemoteSubmitButton = ({onClick}) => {
	return (
		<button type="submit" onClick={onClick}>
			Send
		</button>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(ButtonClickSubmit())
			}
	}
}

RemoteSubmitButton = connect(null, mapDispatchToProps)(RemoteSubmitButton);

const CreateClientForm = (props) => {
	const {handleSubmit, load, pristine, reset, submitting} = props;
	return (
		<form onSubmit = {handleSubmit}>
			<table><tbody>
				<tr>
					<td>
						<label>Client first name:</label>
					</td>
					<td>
						<Field name="first_name" component="input" type="text"/>
					</td>
				</tr>
				<tr>
					<td>
						<label>Client last name:</label>
					</td>
					<td>
						<Field name="last_name" component="input" type="text"/>
					</td>
				</tr>
				<tr>
					<td>
						<label>Arrived (date and time):</label>
					</td>
					<td>
						<Field name="arrived" component="input" type="datetime-local"/>
					</td>
				</tr>
				<tr>
					<td>
						<label>Symptoms:</label>
					</td>
					<td>
						<Field name="symptoms" component="textarea"/>
					</td>
				</tr>
				<tr>
					<td>
						<label>Diagnos:</label>
					</td>
					<td>
						<Field name="diagnos" component="textarea"/>
					</td>
				</tr>
			</tbody></table>
			<RemoteSubmitButton/>
		</form>
	)
}

export default reduxForm({
	form: 'createClientFormId',
	onSubmit: createClientSubmit,
})(CreateClientForm);


