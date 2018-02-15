/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [logger, sagaMiddleware];

  const store = createStore(reducers, {}, applyMiddleware(...middlewares));

  store.runSaga = sagaMiddleware.run(rootSaga);

  return store;
}
