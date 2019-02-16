import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import monitorReducerEnhancer from '../enhancers/monitorReducer';
import rootReducer from '../reducers';

// All the logic related to configuring the redux store - including importing
// reducers, middleware, and enhancers - is handled here.

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
    const middlewares = [
        thunkMiddleware, // Lets us dispatch() functions.
        loggerMiddleware, // Neat middleware that logs actions.
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [
        middlewareEnhancer,
        monitorReducerEnhancer
    ];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancers,
      );

    return store;
};

export default configureStore;