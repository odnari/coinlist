export const baseURL = 'https://api.coingecko.com/api/v3';

export const endpoints = {
  markets: `${baseURL}/coins/markets`,
  coinById: id => `${baseURL}/coins/${id}`,
};
