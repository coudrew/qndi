const createReducer = (INITIAL_STATE, handlers) => (state = INITIAL_STATE, action) => {
    const { type } = action;
    return handlers[type] ? handlers[type](state, action) : state;
};

export default createReducer;