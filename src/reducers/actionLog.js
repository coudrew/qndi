import createReducer from './createReducer';
import { SET_ACTIONS } from '../actions';

const intial_state = {
    actions: []
};

export const setActions = (state, action) => {
    const { actions } = action;
    return {
        actions
    };
};

const handlers = {
    [SET_ACTIONS]: setActions
};

const actionLog = createReducer(intial_state, handlers);
export default actionLog;