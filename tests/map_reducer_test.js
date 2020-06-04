import MapReducer from '../src/reducers/map_display';

describe(MapReducer, () => {
  it('Should return a default state of false', () => {
    expect(MapReducer(undefined, {})).toEqual(false);
  });

  it("Should return current state if it's not null", () => {
    expect(MapReducer('false', {})).toEqual('false');
  });

  it('Should handle DISPLAY_MAP action', () => {
    expect(MapReducer(undefined, {
      type: 'DISPLAY_MAP',
      showMap: true,
    })).toEqual(true);
  });
});
