import axios from 'axios';
import { getBaseURLConfig } from '../getBaseURL';

const defaultBaseURL = import.meta.env.OM_BASE_URL;

export function getAxiosInstance(auth = false) {
  const instance = axios.create({
    baseURL: getBaseURLConfig() || defaultBaseURL,
    timeout: 30 * 1000,
  });

  instance.interceptors.request.use(
    async (config) => {
      let headers = { ...config.headers };
      // You can config token for private token here
      if (auth) {
        headers = {
          ...headers,
          // Authorization: `Bearer ${accessToken}`
        };
      }

      return { ...config, headers };
    },
    (error) => Promise.reject(error)
  );
  // Handle response here
  instance.interceptors.response.use((response) => response.data);
  return instance;
}
