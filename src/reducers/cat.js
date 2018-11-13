import createReducer from './createReducer';
import {
    SET_CAT_COLOUR,
    SET_CAT_BREED
} from '../actions';

const INITIAL_STATE = {
    type: 'Cat',
    breed: '',
    colour: ''
};

const setBreed = (state, action) => {
    const { breed } = action;
    return {
        ...state,
        breed
    };
}

const setColour = (state, action) => {
    const { colour } = action;
    return {
        ...state,
        colour
    };
}

const handlers = {
    [SET_CAT_BREED]: setBreed,
    [SET_CAT_COLOUR]: setColour
};

const cat = createReducer(INITIAL_STATE, handlers);
export default cat;