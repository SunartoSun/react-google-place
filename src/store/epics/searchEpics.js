import { geocodeByAddress } from "react-google-places-autocomplete";
import { ofType } from "redux-observable";
import { from } from "rxjs";
import { catchError, map, mergeMap, debounce, throttle } from 'rxjs/operators';
import { ADD_RESULT, ADD_RESULT_SUCCESS } from "../actionTypes";

export const addResult = data => {
    return({
      type: ADD_RESULT,
      payload: data
    })
}

export const addResultSuccess = data => {
    return({
      type: ADD_RESULT_SUCCESS,
      payload: data
    })
}


export const addResultEpic = (action$) => action$.pipe(
    ofType(ADD_RESULT),
    mergeMap(action => from(geocodeByAddress(action.payload)).pipe(
    	map(response => addResultSuccess(response[0])),
        catchError(() => console.error('Error', error))
    ))
);

