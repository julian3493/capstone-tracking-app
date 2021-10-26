import { combineReducers } from 'redux';
import loginReducer from './loginReducers';
import userReducer from './userReducers';

const reducers = combineReducers({
  login: loginReducer,
  logged_user: userReducer,
});

export default reducers;
