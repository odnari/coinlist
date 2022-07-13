import fetchRequest, {defaultHeaders} from './fetchRequest';

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
