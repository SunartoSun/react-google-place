import { geocodeByAddress } from "react-google-places-autocomplete";

export const ADD_RESULT = "ADD_RESULT"

export const addResult = data => {
    return({
      type: ADD_RESULT,
      payload: data
    })
}

export const fetchResult = (data) => {
    return dispatch => {
        geocodeByAddress(data)
        .then(results => dispatch(addResult(results[0])))
        .catch(error => console.error('Error', error));
    };
};