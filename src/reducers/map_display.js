const MapReducer = (state = null, action) => {
  switch (action.type) {
    case 'DISPLAY_MAP':
      return action.display_map;
    default:
      return false;
  }
};

export default MapReducer;
