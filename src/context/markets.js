import React from 'react';
import {createContext, useCallback, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {fetchMarkets} from '../services/api';
import {loadingStates} from '../constants';

export const MarketsContext = createContext();

const initialData = [];

export function MarketsProvider(props) {
  const [items, setItems] = useState(initialData);
  const [state, setState] = useState(loadingStates.IDLE);

  const fetch = useCallback((options = {}) => {
    setState(loadingStates.LOADING);

    fetchMarkets(options)
      .then(data => {
        setItems(data);
        setState(loadingStates.SUCCESS);
      })
      .catch(err => {
        Alert.alert('Error while loading markets data', err.toString());
        setState(loadingStates.ERROR);
      });
  }, []);

  const value = useMemo(
    () => ({items, fetch, status: state}),
    [items, state, fetch],
  );

  return <MarketsContext.Provider value={value} {...props} />;
}
