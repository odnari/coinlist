import {getUrlWithParams} from './getUrlWithParams';

describe('getUrlWithParams', () => {
  it('should return unmodified url when no params were passed', () => {
    const url = 'https://example.com';

    expect(getUrlWithParams(url)).toBe(url);
  });

  it('should return proper url with one search parameters', () => {
    const url = 'https://example.com';
    const params = {
      currency: 'usd',
    };

    expect(getUrlWithParams(url, params)).toBe(
      `${url}?currency=${params.currency}`,
    );
  });

  it('should return proper url with many search parameters', () => {
    const url = 'https://example.com';
    const params = {
      currency: 'usd',
      locale: 'en',
      type: 'list',
    };

    expect(getUrlWithParams(url, params)).toBe(
      `${url}?currency=${params.currency}&locale=${params.locale}&type=${params.type}`,
    );
  });
});
