const MapReducer = (state = null, action) => {
  switch (action.type) {
    case 'DISPLAY_MAP':
      return action.showMap;
    default:
      return state || false;
  }
};

export default MapReducer;
