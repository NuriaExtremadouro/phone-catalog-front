import { combineReducers } from 'redux';
import phoneReducer from './phoneReducer';

export default combineReducers({
    data: phoneReducer
})