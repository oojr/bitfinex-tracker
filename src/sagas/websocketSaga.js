import { take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

function initWebsocket() {
  return eventChannel(sagaEmmiter => {
    const emitter = sagaEmmiter;
    const ws = new WebSocket('wss://api.bitfinex.com/ws/2');
    ws.onopen = () => {
      const tickerMessage = JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tBTCUSD'
      });

      ws.send(tickerMessage);

      const bookMessage = JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD',
        prec: 'P2',
        freq: 'F1',
        len: 25
      });

      ws.send(bookMessage);

      const tradeMessage = JSON.stringify({
        event: 'subscribe',
        channel: 'trades',
        symbol: 'tBTCUSD'
      });

      ws.send(tradeMessage);
    };
    ws.onerror = error => {
      console.log('WebSocket error ' + error);
      console.dir(error);
    };
    ws.onmessage = e => {
      const data = JSON.parse(e.data);

      const response = data[1];

      if (response) {
        switch (response.length) {
          case 10:
            return emitter({
              type: 'TICKER_EVENT_RECEIVED',
              response
            });

          case 30:
            return emitter({
              type: 'TRADE_EVENT_RECEIVED',
              response
            });

          case 50:
            return emitter({
              type: 'ORDER_EVENT_RECEIVED',
              response
            });
          default:
          // nothing to do
        }
      }
    };

    // unsubscribe function
    return () => {
      console.log('Socket off');
    };
  });
}
export default function* wsSagas() {
  const channel = yield call(initWebsocket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
