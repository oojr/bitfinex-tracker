const initialState = {
  high: null,
  low: null,
  percentChange: null,
  price: null,
  volume: null,
  isLoading: true
};

const ticker = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKER_EVENT_RECEIVED':
      return {
        ...state,
        low: action.response[9],
        high: action.response[8],
        percentChange: action.response[5] * 100,
        price: action.response[6],
        volume: action.response[7],
        isLoading: false
      };
    default:
      return state;
  }
};

export default ticker;
