const BASE_URL_KEY = 'base_url_config';

export function setBaseURLConfig(value) {
  return localStorage.setItem(BASE_URL_KEY, value);
}

export function getBaseURLConfig() {
  return localStorage.getItem(BASE_URL_KEY);
}
