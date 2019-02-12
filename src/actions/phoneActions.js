import { GET_PHONES_REQUEST, GET_PHONES_SUCCESS, GET_PHONES_ERROR, GET_PHONE } from './types';
const axios = require('axios');

/**
 * Executes a GET request to the backend to retrieve the phone list.
 */
export const getPhones = () => dispatch => {
    dispatch({ type: GET_PHONES_REQUEST });
    return axios.get('http://localhost:3001/phones')
        .then(function (response) { // Success
            dispatch({
                type: GET_PHONES_SUCCESS,
                payload: response.data
            })
        })
        .catch(function (error) { // Error
            console.log(error);
            dispatch({
                type: GET_PHONES_ERROR
            })
        });
}

/**
 * Checks the list of phones to return the one with a matching id.
 * @param {*} id: id of the phone to be retrieved.
 */
export const getPhone = (id) => (dispatch, getState) => {
    var phones = getState().data.phones; // Get the phone list from the current state
    if (phones.length > 0) { // If there were some phones, try to return the matching one (a null will redirect to the NotFound page)
        var phone = phones.find(k => k.id === id);
        dispatch({
            type: GET_PHONE,
            payload: phone
        })
    } else { // If there weren't any phones, the user might have navigated directly via URL
        // We need to get the phones first (since there is only one endpoint /phones)
        dispatch({ type: GET_PHONES_REQUEST });
        return axios.get('http://localhost:3001/phones')
            .then(function (response) { // If the request was successful, we return a phone normally
                var phone = response.data.find(k => k.id === id);
                dispatch({
                    type: GET_PHONE,
                    payload: phone
                })
            })
            .catch(function (error) { // Error
                console.log(error);
                dispatch({
                    type: GET_PHONES_ERROR
                })
            });
    }
    
}