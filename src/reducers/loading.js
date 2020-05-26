const loadingReducer = (state = null, action) => {
    switch (action.type) {
      case 'LOADING':
        return action.isLoading
      default:
        return true;
    }
  };
  
  export default loadingReducer;