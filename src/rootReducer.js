// rootReducer.js

import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  // Other reducers
});

export default rootReducer;
