import { ADD_RESULT } from "../actions/searchAction";

const initialState = {
    results: []
}

const searchReducer = (state = initialState, action) => {
    const { type, payload} = action;
    switch(type){
        case ADD_RESULT:
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