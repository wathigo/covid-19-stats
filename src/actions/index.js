 const CHANGE_FILTER = 'CHANGE_FILTER';
 const GET_ALL_DATA = 'GET_ALL_DATA';

 export const fetchData = ((dispatch) => {
    return  function(dispatch) {
        fetch(`https://api.covid19api.com/summary`)
        .then((response) => response.json())
        .then((data) => { 
            console.log('fetched!!!')
            dispatch(updateData(data)); 
            dispatch(loading())
        })
        .catch((err) => console.log(err));
    } 
});

 export const updateData = (data) => ({
    type: GET_ALL_DATA,
    state: data,
});

export const loading = () => ({
    type: 'LOADING',
    isLoading: false,
});

export const changeFilter = filter => ({
    type: CHANGE_FILTER,
    filter,
  });
