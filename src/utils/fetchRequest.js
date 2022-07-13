export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
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
