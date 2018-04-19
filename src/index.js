import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

ReactDOM.render(<CheeseList cheeses={cheeses}/>, document.getElementById('root'));
registerServiceWorker();
