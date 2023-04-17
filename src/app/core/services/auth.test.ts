import { AuthStorageService } from './authStorage.service';

describe('Check auth storage service', () => {
  
  const authStorageService = new AuthStorageService();
  it ('Check setItem called', () => {
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    authStorageService.setToken('abc');
    expect(setItemMock).toBeCalled();
    expect(setItemMock).toBeCalledWith('token', 'abc');
  });

  it ('Check getItem called', () => {
    const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
    authStorageService.getToken();
    expect(getItemMock).toBeCalled();
    expect(getItemMock).toBeCalledWith('token');
  });

  it ('Check removeItem called', () => {
    const removeItem = jest.spyOn(Storage.prototype, 'removeItem');
    authStorageService.removeToken();
    expect(removeItem).toBeCalled();
    expect(removeItem).toBeCalledWith('token');
  });
});
