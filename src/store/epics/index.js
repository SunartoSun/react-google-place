import { combineEpics } from 'redux-observable';
import { addResultEpic } from './searchEpics';

const rootEpic = combineEpics(
    addResultEpic
)
 
export default rootEpic;