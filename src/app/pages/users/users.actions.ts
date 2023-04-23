import { USERS_TYPES } from '../../core/constants/types';

export const getUsersList = () => {
  return {
    type: USERS_TYPES.GET_USERS_LIST,
  };
};

export const getUsersListSuccess = (data) => {
  return {
    type: USERS_TYPES.GET_USERS_LIST_SUCCESS,
    payload: { data },
  };
};

export const getUsersListError = (error) => {
  return {
    type: USERS_TYPES.GET_USERS_LIST_ERROR,
    payload: { error },
  };
};

export const getUser = (id) => {
  return {
    type: USERS_TYPES.GET_USER,
    payload: { id },
  };
};

export const getUserSuccess = (data) => {
  return {
    type: USERS_TYPES.GET_USER_SUCCESS,
    payload: { data },
  };
};

export const getUserError = (error) => {
  return {
    type: USERS_TYPES.GET_USER_ERROR,
    payload: { error },
  };
};

export const deleteUser = (id) => {
  return {
    type: USERS_TYPES.DELETE_USER,
    payload: { id },
  };
};
