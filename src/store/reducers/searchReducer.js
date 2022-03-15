import { ADD_RESULT } from "../actions/searchAction";
import { ADD_RESULT_SUCCESS } from "../actionTypes";

const initialState = {
    results: []
}

const searchReducer = (state = initialState, action) => {
    const { type, payload} = action;
    switch(type){
        // case ADD_RESULT:
        //   return {
        //     ...state,
        //     results: [...state.results, payload]
        //   }
        case ADD_RESULT_SUCCESS:
          return {
            ...state,
            results: [...state.results, payload]
          }
        default:
            return {
                ...state
            }
    }
}
export default searchReducer;