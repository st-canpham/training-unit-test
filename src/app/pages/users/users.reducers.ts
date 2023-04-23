import { createReducer } from '@app/core/helpers/reducer-factory';
import { USERS_TYPES } from '@app/core/constants/types';

const initialState = {
  isLoading: false,
  usersList: null,
  userDetail: null,
  hasError: false,
  errorMessage: null,
};

const getUsersList = (state) => ({
    ...state,
    isLoading: true,
});

const getUsersListSuccess = (state, payload) => ({
    ...state,
    isLoading: false,
    usersList: payload.data,
});

const getUsersListError = (state, payload) => ({
    ...state,
    isLoading: false,
    usersList: null,
    hasError: true,
    errorMessage: payload.error,
});

const getUser = (state) => ({
    ...state,
    isLoading: true,
});

const getUserSuccess = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    userDetail: payload.data,
  };
};

const getUserError = (state, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  errorMessage: payload.error,
});

const deleteUser = (state, payload) => ({
  ...state,
  usersList: state.usersList.filter(user => user.id !== payload.id),
});

const strategies = {
  [USERS_TYPES.GET_USERS_LIST]: getUsersList,
  [USERS_TYPES.GET_USERS_LIST_SUCCESS]: getUsersListSuccess,
  [USERS_TYPES.GET_USERS_LIST_ERROR]: getUsersListError,
  [USERS_TYPES.GET_USER]: getUser,
  [USERS_TYPES.GET_USER_SUCCESS]: getUserSuccess,
  [USERS_TYPES.GET_USER_ERROR]: getUserError,
  [USERS_TYPES.DELETE_USER]: deleteUser,
  __default__: state => state,
};

const userReducer = createReducer(strategies, initialState);
export default userReducer;
