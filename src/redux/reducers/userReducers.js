import { SET_LOGGED_USER } from '../actions/action-types';

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_LOGGED_USER:
      return { ...payload };
    default:
      return { state };
  }
};

export default userReducer;
