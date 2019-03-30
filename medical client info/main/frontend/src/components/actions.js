import React from "react";
import axios from 'axios';
import { submit } from 'redux-form';
import {hasSubmitSucceeded} from 'redux-form';

// на цей url будуть get і post requests відправлятися 
// django rest спокійно справляється з ними
let apiUrl = "http://127.0.0.1:8000/api/client/";

function createClientSubmit (values) {
		return axios.post(apiUrl, {
			first_name: values.first_name,
			last_name: values.last_name,
			arrived: values.arrived,
			symptoms: values.symptoms,
			diagnos: values.diagnos,
		}).then(response => {
			return response.data;
		}).catch(function (error) {
		console.log(error);
	  });
}

const fetchClients = (clients) => {
	return {
		type: "FETCH_CLIENTS",
		clients
	}
}

const fetchAllClients = () => {
	return (dispatch) => {
		return axios.get(apiUrl)
			.then(
				response => {
					dispatch(fetchClients(response.data))
				}
			)
			.catch(error => {
				throw(error);
			});
	};
};

const ButtonClickSubmit = () => {
	return (dispatch, getState) => {
		let promise = new Promise((resolve, reject) => {
			dispatch(submit('createClientFormId'));
			setInterval(
			() => {
				if (hasSubmitSucceeded('createClientFormId')(getState())){
					resolve();
				}
			}, 200); 	
		})
		promise.then(
				result => {
					dispatch(fetchAllClients())
					}
				)
	}
}

export {createClientSubmit, ButtonClickSubmit, fetchAllClients, fetchClients};