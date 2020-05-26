import { combineReducers } from 'redux';
import countryReducer from './country';
import filterReducer from './filter';

const rootReducer = combineReducers({
  dataSummary: countryReducer,
  filter: filterReducer,
});

export default rootReducer; 