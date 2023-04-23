import { ApiService } from '@app/core/services/api.service';
import { USERS_TYPES } from '@app/core/constants/types';
import { getUserError, getUserSuccess, getUsersListError, getUsersListSuccess } from './users.actions';
import { put, takeLatest } from 'redux-saga/effects';

const http = new ApiService();

function* getUsersList() {
  try {
    const res = yield http.get(['https://jsonplaceholder.typicode.com/users']);
    yield put(getUsersListSuccess(res));
  } catch (error) {
    yield put(getUsersListError(error));
  }
}

function* getUser(action) {
  try {
    const res = yield http.get([
      `https://jsonplaceholder.typicode.com/users/${action.payload.id}`,
    ]);
    yield put(getUserSuccess(res))
  } catch (error) {
    yield put(getUserError(error));
  }
}

export function* watchUser() {
  yield takeLatest(USERS_TYPES.GET_USERS_LIST, getUsersList);
  yield takeLatest(USERS_TYPES.GET_USER, getUser);
}
