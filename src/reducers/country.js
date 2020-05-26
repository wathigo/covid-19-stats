const countryReducer = (state = null, action) => {
    switch (action.type) {
      case 'VIEW_DETAILS':
        return [...state, action.country];
      case 'GET_ALL_DATA':
        return action.state;
      default:
        return state;
    }
  };
  
  export default countryReducer;