import { combineReducers } from 'redux';

import ticker from './ticker';
import orders from './orders';
import trades from './trades';

const reducers = combineReducers({
  ticker,
  orders,
  trades
});

export default reducers;
