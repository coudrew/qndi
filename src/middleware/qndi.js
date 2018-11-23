import { CAT_BREED_FOREST, SET_CAT_BREED, ADD_ACTION, SET_ACTIONS } from '../actions';

// export const qndi = ({ getState, dispatch }) => next => action => {
//     // console.log(action);
//     if (action.type !== SET_ACTIONS){
//         const { actions } = getState().actionLog;
//         console.log(actions);
//         const nextActions = [...actions, action];
//         dispatch({
//             type: SET_ACTIONS,
//             actions: nextActions
//         });
//     }
    
//     if (action.type === CAT_BREED_FOREST) {
//         return dispatch({
//             type: SET_CAT_BREED,
//             breed: 'Forest'
//         });
//     }
//     return next(action);
// }


export const qndi = handlers => {
    const logic = handlers.reduce((cur, acc) => {
        acc = {
            ...acc,
            cur
        };
        return acc;
    }, {});

    return store => next => async action => {
        const { type } = action;
        console.log(logic)
        if (logic[type]) {
            return await logic[type](store, action).then(() => next(action)); 
        }
        return next(action);
    }
}

export const catBreedForest = async ({ dispatch }) => dispatch({
    type: SET_CAT_BREED,
    breed: 'Forest'
}).then(() => {
    setTimeout(() => dispatch({ type: SET_CAT_BREED, breed: 'Or whatever' }), 2000);
});

export const handlers = [
    { [CAT_BREED_FOREST]: catBreedForest }
];