export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getUrlWithParams = (sourceUrl, params = {}) => {
  const keys = Object.keys(params);

  if (!keys.length) {
    return sourceUrl;
  }

  const paramsString = keys
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

  if (method !== 'GET' && method !== 'HEAD') {
    request.body = JSON.stringify(body);
  }

  return fetch(url, request).then(res => res.json());
}
