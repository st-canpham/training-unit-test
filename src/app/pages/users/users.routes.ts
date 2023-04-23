import React from 'react';
import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const UsersList = React.lazy(() => import('./containers/UsersList'));
const UserDetail = React.lazy(() => import('./containers/UserDetail'));

const usersRoutes: PageRoute[] = [
  {
    path: '/users',
    element: UsersList,
  },
  {
    path: '/user/:id',
    element: UserDetail,
  }
];

export default usersRoutes;
