import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
}

const app = (state = initialState, action) => {
    return state
}

const reducers = combineReducers({
    app,
    form: formReducer
})

export default reducers;