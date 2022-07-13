import {Alert} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {fetchCoin} from '../../../../services/api';
import {loadingStates} from '../../../../constants';

export default function useCoin(id, options = {}) {
  const {locale, currency} = options;
  const [state, setState] = useState(loadingStates.IDLE);
  const [coin, setCoin] = useState({});

  const fetch = useCallback(() => {
    setState(loadingStates.LOADING);

    fetchCoin(id, {localization: locale})
      .then(data => {
        setCoin(data);
        setState(loadingStates.SUCCESS);
      })
      .catch(err => {
        Alert.alert(`Error while loading coin ${id} data`, err.toString());
        setState(loadingStates.ERROR);
      });
  }, [locale, id]);

  useEffect(() => fetch(), [fetch]);

  const marketCapValue = coin.market_data?.market_cap?.[currency];
  const marketCap = marketCapValue
    ? `${marketCapValue} ${currency.toUpperCase()}`
    : '';

  return {
    state,
    refresh: fetch,
    data: {
      marketCap,
      image: coin.image?.large,
      homepage: coin.links?.homepage?.[0],
      description: coin.description?.[locale],
      genesisDate: coin.genesis_date,
      hashing: coin.hashing_algorithm,
      symbol: coin.symbol,
    },
  };
}
