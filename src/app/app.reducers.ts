import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import userReducer from '@app/pages/users/users.reducers';

const appReducer = combineReducers({
  authReducer,
  userReducer
});

export default appReducer;
