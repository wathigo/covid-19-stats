const countryReducer = (state = null, action) => {
    switch (action.type) {
      case 'VIEW_DETAILS':
        return [...state, action.country];
      default:
        return state;
    }
  };
  
  export default countryReducer;