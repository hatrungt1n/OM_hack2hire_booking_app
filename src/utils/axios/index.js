import { getAxiosInstance } from './getAxiosInstance';

let publicRequester;
let authRequester;

// Singleton instance
function getInstance(isPrivate = false) {
  if (!publicRequester) {
    publicRequester = getAxiosInstance();
  }

  if (!authRequester && isPrivate) {
    authRequester = getAxiosInstance(isPrivate);
  }

  return {
    publicRequester,
    authRequester,
  };
}

export const axiosInstance = getInstance().publicRequester;
export const privateRequester = getInstance(true).authRequester;
