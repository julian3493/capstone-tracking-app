import { LOGIN, SET_LOGGED_USER, USER_TRACKS } from './action-types';

export const login = (apiResponse) => ({
  type: LOGIN,
  payload: apiResponse,
});

export const userTracks = (apiResponse) => ({
  type: USER_TRACKS,
  payload: apiResponse,
});

export const setLoggedUser = (user) => ({
  type: SET_LOGGED_USER,
  payload: user,
});
