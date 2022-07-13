import {endpoints} from '../endpoints';
import {getUrlWithParams} from '../utils/getUrlWithParams';
import fetchRequest from '../utils/fetchRequest';

const defaultFetchMarketsOptions = {
  vs_currency: 'EUR',
  per_page: 20,
};

export const fetchMarkets = (options = {}) => {
  const url = getUrlWithParams(endpoints.markets, {
    ...defaultFetchMarketsOptions,
    ...options,
  });

  return fetchRequest(url);
};

export const fetchCoin = (id, options = {}) => {
  const url = getUrlWithParams(endpoints.coinById(id), options);
  return fetchRequest(url);
};
