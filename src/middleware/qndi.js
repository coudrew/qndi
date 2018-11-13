import { CAT_BREED_FOREST, SET_CAT_BREED, ADD_ACTION, SET_ACTIONS } from '../actions';

export const qndi = ({ getState, dispatch }) => next => action => {
    // console.log(action);
    if (action.type !== SET_ACTIONS){
        const { actions } = getState().actionLog;
        console.log(actions);
        const nextActions = [...actions, action];
        dispatch({
            type: SET_ACTIONS,
            actions: nextActions
        });
    }
    
    if (action.type === CAT_BREED_FOREST) {
        return dispatch({
            type: SET_CAT_BREED,
            breed: 'Forest'
        });
    }
    return next(action);
}