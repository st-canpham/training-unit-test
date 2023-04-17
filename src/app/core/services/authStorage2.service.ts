import { AuthStorageService, AuthStorage } from './authStorage.service';

export class AuthStorageService2 {
  authStorage: AuthStorage;
  isLogin: boolean;

  constructor() {
    this.authStorage = new AuthStorageService();
  }

  getToken() {
    return this.authStorage.getToken();
  }

  setToken(token) {
    this.authStorage.setToken(token);
  }

  logout() {
    this.authStorage.removeToken();
    this.isLogin = false;
  }
}
