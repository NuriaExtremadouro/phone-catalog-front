import { GET_PHONES_REQUEST, GET_PHONES_SUCCESS, GET_PHONES_ERROR, GET_PHONE } from '../actions/types';

// Initial state.
const initialState = {
    phones: [],
    phone: {},
    isFetching: false
}

/**
 * Checks the action to decide what should be returned as the state.
 * @param {*} state: passed state or initial state if none was given.
 * @param {*} action: action that got executed.
 */
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PHONES_REQUEST: // Action when the GET request is executed but still loading
            return {
                ...state,
                isFetching: true
            };
        case GET_PHONES_SUCCESS: // Action when the GET request returns success
            return {
                ...state,
                isFetching: false,
                phones: action.payload
            };
        case GET_PHONES_ERROR: // Action when the GET request returns error
            return {
                ...state,
                isFetching: false,
                phones: []
        };
        case GET_PHONE: // Action when the phone data is being retrieved
            return {
                ...state,
                isFetching: false,
                phone: action.payload
            };
        default:
            return state;
    }
}