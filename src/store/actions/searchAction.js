import { geocodeByAddress } from "react-google-places-autocomplete";
import { ADD_RESULT } from "../actionTypes";

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