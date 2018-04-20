import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESES_ERROR,
    error
});

export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
    fetch(`${API_BASE_URL}/api/cheeses`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(cheeses => {
        dispatch(fetchCheesesSuccess(cheeses));
    }).catch(err => {
        dispatch(fetchCheesesError(err));
    });
};


export const ADD_CHEESE_SUCCESS = 'ADD_CHEESE_SUCCESS';
export const addCheeseSuccess = cheeses => ({
    type: ADD_CHEESE_SUCCESS,
    cheeses
})

export const ADD_CHEESE_REQUEST = 'ADD_CHEESE_REQUEST';
export const addCheeseRequest = () => ({
    type: ADD_CHEESE_REQUEST
})

export const ADD_CHEESE = 'ADD_CHEESE';
export const addCheese = (values) => dispatch => {
    dispatch(addCheeseRequest())
    console.log('STRINGIFIED VALUES:',JSON.stringify(values));
    const newItem = { name: values };
    fetch(`${API_BASE_URL}/api/cheeses`, {
        method: 'POST', 
        body: JSON.stringify(newItem),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(cheese => {
        dispatch(addCheeseSuccess(cheese));
    }).catch(err => {
        console.error(err);
    });
};


