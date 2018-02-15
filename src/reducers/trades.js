const initialState = {
  isLoading: true
};

const trades = (state = initialState, action) => {
  switch (action.type) {
    case 'TRADE_EVENT_RECEIVED':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default trades;
