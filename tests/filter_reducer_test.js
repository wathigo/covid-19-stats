import filterReducer from '../src/reducers/filter';

describe(filterReducer, () => {
  it("Should return a default state of 'ALL'", () => {
    expect(filterReducer(undefined, {})).toEqual('All');
  });

  it("Should return current state if it's not null", () => {
    expect(filterReducer('Kenya', {})).toEqual('Kenya');
  });

  it('Should handle CHANGE_FILTER action', () => {
    expect(filterReducer(undefined, {
      type: 'CHANGE_FILTER',
      filter: 'Uganda',
    })).toEqual('Uganda');
  });
});
