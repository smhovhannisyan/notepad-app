import type { httpPropsType } from './types';

const getHeaders = (headers = {}) => ({
  headers: {
    ...headers,
  },
});

const http: httpPropsType = async ({ url, options }) => {
  const response = await fetch(url, { ...options, ...getHeaders(options?.headers) });
  return response.json();
};

export default http;
