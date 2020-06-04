import expect from 'expect';
import countryReducer from '../src/reducers/country';

describe(countryReducer, () => {
  it('Should return an initial state of null', () => {
    expect(countryReducer(undefined, {})).toEqual(null);
  });

  it('Should handle GET_ALL_DATA', () => {
    expect(countryReducer(undefined, {
      type: 'GET_ALL_DATA',
      state: {},
    })).toEqual({});
  });

  it('Should handle VIEW_DETAILS', () => {
    expect(countryReducer([], {
      type: 'VIEW_DETAILS',
      country: 'Algeria',
    })).toEqual(['Algeria']);
  });
});
