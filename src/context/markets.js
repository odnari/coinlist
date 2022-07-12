import React from 'react';
import {createContext, useCallback, useMemo, useState} from 'react';
import {fetchMarkets} from '../services/api';

export const MarketsContext = createContext();

const initialData = [];

export function MarketsProvider(props) {
  const [items, setItems] = useState(initialData);

  const fetch = useCallback(
    (options = {}) =>
      fetchMarkets(options)
        .then(items => {
          setItems(items);
          console.log(items);
        })
        .catch(err => console.error(err)),
    [],
  );

  const value = useMemo(() => ({items, fetch}), [items, fetch]);

  return <MarketsContext.Provider value={value} {...props} />;
}
