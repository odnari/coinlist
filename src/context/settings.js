import React from 'react';
import {createContext, useMemo, useState} from 'react';

export const SettingsContext = createContext();

const defaultCurrency = 'eur';
const defaultLocale = 'en';

export function SettingsProvider(props) {
  const [currency, setCurrency] = useState(defaultCurrency);
  const [locale, setLocale] = useState(defaultLocale);

  const value = useMemo(
    () => ({locale, currency, setCurrency, setLanguage: setLocale}),
    [locale, currency, setLocale, setCurrency],
  );

  return <SettingsContext.Provider value={value} {...props} />;
}
