import { combineReducers } from 'redux';
import countryReducer from './country';
import filterReducer from './filter';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  dataSummary: countryReducer,
  filter: filterReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
