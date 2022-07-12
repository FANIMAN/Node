import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers';

//create new Store
const store = createStore(rootReducer, applyMiddleware(thunk));   //reducer pass gonafi for the createstore When we  create a store in React 

export default store;


