import fetchRequest, {getUrlWithParams} from './fetchRequest';
import {endpoints} from '../endpoints';

const defaultFetchMarketsOptions = {
  vs_currency: 'EUR',
  per_page: 10,
};

export const fetchMarkets = (options = {}) => {
  const url = getUrlWithParams(endpoints.markets, {
    ...defaultFetchMarketsOptions,
    ...options,
  });

  return fetchRequest(url);
};

export const fetchCoin = id => {
  return fetchRequest(endpoints.coinById(id));
};
