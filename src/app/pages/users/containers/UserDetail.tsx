import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../users.actions';
import { useParams } from 'react-router';

export default function UserDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userDetail, isLoading, hasError, errorMessage } = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  if (hasError) {
    return <p data-testid="error">{ errorMessage }</p>;
  }

  return (
    <div>
      <h2>USER DETAIL</h2>
      {isLoading ? (
        <p data-testid='loading'>Loading...</p>
      ): (
        userDetail && (
          <div data-testid='user-detail-content'>
            <h3 data-testid='name'>{userDetail.name}</h3>
            <p data-testid='id'>ID: {userDetail.id}</p>
            <p data-testid='username'>UserName: {userDetail.username}</p>
            <p data-testid='phone'>Phone: {userDetail.phone}</p>
            <p data-testid='email'>Email: {userDetail.email}</p>
          </div>
        )
      )}
    </div>
  );
}
