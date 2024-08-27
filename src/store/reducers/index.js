import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    messages: messageReducer
});

export default rootReducer;