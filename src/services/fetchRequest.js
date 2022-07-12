import {re} from '@babel/core/lib/vendor/import-meta-resolve';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getUrlWithParams = (sourceUrl, params) => {
  const paramsString = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  return `${sourceUrl}?${paramsString}`;
};

export default function fetchRequest(
  url,
  body = {},
  method = 'GET',
  headers = {},
) {
  const request = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  if (method !== 'GET') {
    request.body = JSON.stringify(body);
  }

  return fetch(url).then(res => res.json());
}
