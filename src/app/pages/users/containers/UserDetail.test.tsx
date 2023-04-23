import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import initialStateMock from '../../../test/store.mock';
import UserDetail from './UserDetail';

describe('UserDetail', () => {
  describe('Check error', () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock.error);
    it('should navigate correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserDetail />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId('error')).toBeInTheDocument;
    });
  });
  describe('Check loading', () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock.loading);
    it('Loading render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserDetail />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId('loading')).toBeInTheDocument;
    });
  });
  describe('Check loaded', () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock.loaded);
    it('Check data render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserDetail />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId('user-detail-content')).toBeInTheDocument;
      expect(screen.getByTestId('name').textContent).toBe('Leanne Graham');
      expect(screen.getByTestId('id').textContent).toBe('ID: 1');
      expect(screen.getByTestId('username').textContent).toBe('UserName: Bret');
      expect(screen.getByTestId('email').textContent).toBe('Email: Sincere@april.biz');
      expect(screen.getByTestId('phone').textContent).toBe('Phone: 1-770-736-8031 x56442');
    });
  });
});
