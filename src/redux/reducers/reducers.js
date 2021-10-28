import { combineReducers } from 'redux';
import loginReducer from './loginReducers';
import tracksReducer from './tracksReducers';
import userReducer from './userReducers';

const reducers = combineReducers({
  login: loginReducer,
  logged_user: userReducer,
  tracks: tracksReducer,
});

export default reducers;
