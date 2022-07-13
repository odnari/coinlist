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
