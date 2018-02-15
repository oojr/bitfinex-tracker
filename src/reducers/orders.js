const initialState = {
  isLoading: true
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER_EVENT_RECEIVED':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default orders;
