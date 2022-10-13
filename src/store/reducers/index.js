import { combineReducers } from 'redux';
// reducers 
import reducerMessage from './message';
import reducerScores from './scores';

export default combineReducers({
    m : reducerMessage,
    s : reducerScores,
});