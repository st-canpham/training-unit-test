import React from 'react';
import configureStore from 'redux-mock-store';
import initialStateMock from '../../../test/store.mock';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import UsersList from './UsersList';

describe('Check UsersList component', () => {
  describe('Error', () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock.error);
    it('should navigate correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UsersList />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId('error')).toBeInTheDocument;
      // expect(screen.getByTestId('error')).toBeNull;
    });
  });
  describe('Check loading', () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock.loading);
    it('Loading render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UsersList />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId('loading')).toBeInTheDocument;
    });
  });
  describe('Get users list success', () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock.loaded);
    it('data render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UsersList />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument;
      expect(screen.getByText('Ervin Howell')).toBeInTheDocument;
      expect(screen.getByText('Clementine Bauch')).toBeInTheDocument;
      expect(screen.getAllByTestId('user').length).toBe(3);
    });
  });
  describe('Check Delete User', () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock.loaded);
    it('should delete successfully', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UsersList />
          </BrowserRouter>
        </Provider>
      );
      const deleteBtn = screen.getAllByTestId('delete-btn');
      fireEvent.click(deleteBtn[0]);
      waitFor(() => {
        expect(screen.getAllByTestId('user').length).toBe(2);
      });
    });
  });
});
