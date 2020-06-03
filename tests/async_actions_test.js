// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import expect from 'expect';

// import * as ActionCreators from '../src/actions';


// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//     let store;
//     const fetchCountriesData = {
//         "data": [
//             {
//                 name: "Uganda",
//                 deaths: 100
//             },
//             {
//                 name: "Kenya",
//                 deaths: 50
//             },
//         ]
//     };

//     beforeEach(() => {
//         store = mockStore({});
//     });

//     afterEach(() => {
//         fetchMock.restore()
//       })

//     it('creates GET_ALL_DATA when fetching countries data has been done', () => {
//         fetchMock.getOnce('/todos', {
//             body: fetchCountriesData,
//             headers: { 'content-type': 'application/json' }
//           })

//           const expectedAction = {
//               'type': 'GET_ALL_DATA',
//               state: fetchCountriesData
//           }

//           const store = mockStore({ data: [] })

//           return store.dispatch(ActionCreators.fetchData()).then(() => {
//             // return of async actions
//             expect(store.getActions()).toEqual(expectedActions)
//           })
//     })
// })
