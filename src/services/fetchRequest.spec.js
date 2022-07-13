import fetchRequest, {defaultHeaders, getUrlWithParams} from './fetchRequest';

describe('fetchRequest', () => {
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

  describe('fetchRequest', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(),
        }),
      );
    });

    afterAll(() => {
      global.fetch.mockRestore();
    });

    beforeEach(() => {
      global.fetch.mockClear();
    });

    it('should call fetch with proper configuration', async () => {
      fetch.mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        }),
      );

      const url = 'https://example.com';

      await fetchRequest(url);

      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith(url, {
        method: 'GET',
        headers: defaultHeaders,
      });
    });

    it('should ignore body for GET request', async () => {
      fetch.mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        }),
      );

      const url = 'https://example.com';

      await fetchRequest(url, {test: 123});

      expect(fetch).toHaveBeenCalled();

      const request = fetch.mock.calls[0][1];
      expect(request.hasOwnProperty('body')).toBeFalsy();
    });

    it('should contain body as string for POST request', async () => {
      fetch.mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        }),
      );

      const url = 'https://example.com';
      const body = {test: 123};

      await fetchRequest(url, body, 'POST');

      expect(fetch).toHaveBeenCalled();

      const request = fetch.mock.calls[0][1];
      expect(request.hasOwnProperty('body')).toBeTruthy();
      expect(request.body).toBe(JSON.stringify(body));
    });
  });
});
