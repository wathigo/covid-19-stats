import loadingReducer from '../src/reducers/loading';

describe(loadingReducer, () => {
    it("Should return a default state of true", () => {
        expect(loadingReducer(undefined, {})).toEqual(true)
    }) 

    it("Should return current state if it's not null", () => {
        expect(loadingReducer("false", {})).toEqual("false")
    })

    it("Should handle LOADING action", () => {
        expect(loadingReducer(undefined, {
            type: 'LOADING',
            isLoading: false
        })).toEqual(false)
    })
})