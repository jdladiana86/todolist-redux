import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore, compose} from 'redux';
import storeReducer from './reducer/index';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

let storetodos = {
    activeFilter: 'ALL',
    todos:[
        {id: 0, todo: 'fare la spesa', completed: false},
        {id: 1, todo: 'fare i compiti', completed: true},
        {id: 2, todo: 'chiamare la mamma', completed: false}
    ]
}

if(localStorage.getItem('mytodolist')){
    const currState = JSON.parse(localStorage.getItem('mytodolist'));
    if(currState){
        storetodos = currState
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    storeReducer, 
    {...storetodos},
    composeEnhancers(applyMiddleware(logger, promise))
    
);

store.subscribe(
    () => {
        console.log(store.getState())
        const currState = JSON.stringify(store.getState());
        localStorage.setItem('mytodolist', currState);
    }
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
