import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsersList } from '../users.actions';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const dispatch = useDispatch();
  const { usersList, isLoading, hasError, errorMessage } = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  if (hasError) {
    return <p data-testid="error">{ errorMessage }</p>;
  }

  return (
    <div data-testid='users-list-content'>
        <h2>USERS LIST</h2>
        { isLoading ? (
          <p data-testid="loading">Loading...</p>
        ) : (
          <ul>
            {usersList && usersList.map(user => (
              <li key={user.id} data-testid='user'>
                <Link to={`/user/${user.id}`}>
                  {user.name}
                </Link>
                <button data-testid='delete-btn' onClick={() => dispatch(deleteUser(user.id))}>X</button>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
