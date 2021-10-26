import { LOGIN } from '../actions/action-types';

const loginInitalState = {
  status: 401,
};

const loginReducer = (state = loginInitalState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default loginReducer;
