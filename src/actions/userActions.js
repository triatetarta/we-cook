import { SET_LOADING, USER_LOGIN, USER_LOGOUT } from './types';

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const userLogin = () => {
  setLoading();

  return {
    type: USER_LOGIN,
  };
};

export const userLogout = () => {
  setLoading();

  return {
    type: USER_LOGOUT,
  };
};
