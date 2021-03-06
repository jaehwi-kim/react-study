// import { combineReducers } from 'redux';
// import counter from './counter';

// // create and export one reducer containing all reducers using combineReducers
// const rootReducer = combineReducers({
//   counter
// });

// export default rootReducer;

// thunk api 처리
import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading
});

export default rootReducer;