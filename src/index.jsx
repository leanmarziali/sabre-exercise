import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './app/store/configureStore';
import './index.style.scss';
import App from './app/app';

// Single store for whole application
const store = configureStore(); // you may pass preloadedState to store

const render = (Component) => {
        ReactDOM.render(
                <Provider store={ store }>
                        <Component />
                </Provider>,
                document.getElementById('root')
        );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
