import { USER_TRACKS } from '../actions/action-types';

const tracksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case USER_TRACKS:
      return { payload };
    default:
      return state;
  }
};

export default tracksReducer;
