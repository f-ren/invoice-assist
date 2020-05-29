import config from '../config';

const TokenService = {
  saveToken(token, cb) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
    cb();
  },
  getToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearToken(cb) {
    window.localStorage.removeItem(config.TOKEN_KEY);
    cb();
  },
  hasToken() {
    if (window.localStorage.getItem(config.TOKEN_KEY)) {
      return true;
    }
  },
};

export default TokenService;
