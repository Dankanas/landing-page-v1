import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import  initialState from './initialState';


const persistedState = initialState;

const store = createStore(reducer, persistedState, composeWithDevTools()); 

export default store;
