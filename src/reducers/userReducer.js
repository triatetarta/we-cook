import { USER_LOGIN, USER_LOGOUT, SET_LOADING } from '../actions/types';

const initialState = {
  user: false,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: true,
        loading: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
