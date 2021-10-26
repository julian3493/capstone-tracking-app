import { LOGIN, LOGOUT } from '../actions/action-types';

const loginInitalState = {
  logged_in: false,
};

const loginReducer = (state = loginInitalState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    case LOGOUT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default loginReducer;
