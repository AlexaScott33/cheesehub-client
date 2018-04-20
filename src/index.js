import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {CheeseList} from './components/cheese-list';
import store from './store';
import './index.css';
import { fetchCheeses } from './actions/cheese';



ReactDOM.render(
    <Provider store={store}>
        <CheeseList />
    </Provider>, 
    document.getElementById('root')
);

