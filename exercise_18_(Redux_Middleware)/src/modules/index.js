import { combineReducers } from 'redux';
import counter from './counter';

// create and export one reducer containing all reducers using combineReducers
const rootReducer = combineReducers({
  counter
});

export default rootReducer;