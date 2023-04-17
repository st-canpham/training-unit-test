import { AuthStorageService } from './authStorage.service';
import { AuthStorageService2 } from './authStorage2.service';

describe('Check auth storage service 2', () => {
  
  const authStorageService2 = new AuthStorageService2();
  it ('Check setToken called', () => {
    const setTokenMock = jest.spyOn(AuthStorageService.prototype, 'setToken');
    authStorageService2.setToken('abc');
    expect(setTokenMock).toBeCalled();
    expect(setTokenMock).toBeCalledWith('abc');
  });

  it ('Check getToken called', () => {
    const getTokenMock = jest.spyOn(AuthStorageService.prototype, 'getToken');
    authStorageService2.getToken();
    expect(getTokenMock).toBeCalled();
  });

  it ('Check removeToken called', () => {
    const removeTokenMock = jest.spyOn(AuthStorageService.prototype, 'removeToken');
    authStorageService2.logout();
    expect(removeTokenMock).toBeCalled();
  });
});
