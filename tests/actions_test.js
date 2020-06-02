import * as ActionCreators from '../src/actions';

describe('actions', () => {
  describe(ActionCreators.updateData, () => {
    const sampleData = {
      "data": [
        {
          'name': "Algeria",
          'deaths': 400,
        },
        {
          'name': 'Kenya',
          'deaths': 60,
        }
      ]
    };
    it("It should return expected action", () => {

      const expectedAction = {
        type: 'GET_ALL_DATA',
        'state': sampleData
      }
      expect(ActionCreators.updateData(sampleData)).toEqual(expectedAction)
    })
  })

  describe(ActionCreators.loading, () => {
    it('It should return expected action', () => {

      const expectedAction = {
        type: 'LOADING',
        'isLoading': false
      }
      expect(ActionCreators.loading()).toEqual(expectedAction)
    })
  })

  describe(ActionCreators.changeFilter, () => {
    const filter = 'Kenya';
    it('It should return expected action', () => {

      const expectedAction = {
        type: 'CHANGE_FILTER',
        'filter': filter,
      }
      expect(ActionCreators.changeFilter(filter)).toEqual(expectedAction)
    })
  })
  describe(ActionCreators.displayMap, () => {
    const value = true;
    it('It should return expected action', () => {

      const expectedAction = {
        type: 'DISPLAY_MAP',
        'showMap': value,
      }
      expect(ActionCreators.displayMap(value)).toEqual(expectedAction)
    })
  })
})