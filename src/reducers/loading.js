const loadingReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.isLoading;
    default:
      return state || true;
  }
};

export default loadingReducer;
