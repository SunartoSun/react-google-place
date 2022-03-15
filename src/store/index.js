import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers"; 
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, epicMiddleware)
)

epicMiddleware.run(rootEpic)

export default store;