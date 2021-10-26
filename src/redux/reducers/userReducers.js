import { SET_USER } from '../actions/action-types';

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { payload };
    default:
      return { state };
  }
};

export default userReducer;
