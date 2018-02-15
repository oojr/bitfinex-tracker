import { all } from 'redux-saga/effects';
import websocketSaga from './websocketSaga';

export default function* rootSaga() {
  yield all([websocketSaga()]);
}
