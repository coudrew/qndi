import { combineReducers } from 'redux';
import cat from './cat';
import actionLog from './actionLog'

export default combineReducers({
    cat: cat,
    actionLog: actionLog
});