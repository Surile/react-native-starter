// import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
// import countReducer from './reducers/countReducer';

// const rootReducer = combineReducers({
//   countReducer,
// });

// // const configureStore = () => {
// //   return createStore(rootReducer);
// // };

// export default rootReducer;

import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import countReducer from './reducers/countReducer';
import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware, logger];

// middlewares.push(logger);

/**
 * 创建store
 */
const store = createStore(
  countReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
