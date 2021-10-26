import { LOGIN, SET_USER, USER_TRACKS } from './action-types';

export const login = (apiResponse) => ({
  type: LOGIN,
  payload: apiResponse,
});

export const userTracks = (apiResponse) => ({
  type: USER_TRACKS,
  payload: apiResponse,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
