import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cheesesReducer from './reducers/cheese';

export default createStore(
        cheesesReducer,
        //window...
        applyMiddleware(thunk)
);