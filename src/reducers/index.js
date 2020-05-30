import { combineReducers } from 'redux';
import countryReducer from './country';
import filterReducer from './filter';
import loadingReducer from './loading';
import MapReducer from './map_display';

const rootReducer = combineReducers({
  dataSummary: countryReducer,
  filter: filterReducer,
  isLoading: loadingReducer,
  mapDisplay: MapReducer,
});

export default rootReducer;
