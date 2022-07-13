import React, {useContext} from 'react';
import renderer from 'react-test-renderer';
import {renderHook, act} from '@testing-library/react-hooks';
import {SettingsContext, SettingsProvider, useSettings} from './settings';

describe('SettingsContext', () => {
  describe('SettingsProvider', () => {
    const TestComponent = () => {
      const {currency, locale} = useContext(SettingsContext);
      return (
        <>
          <p id="currency">{currency}</p>
          <p id="locale">{locale}</p>
        </>
      );
    };

    it('provides expected SettingsContext to child element', () => {
      const component = renderer.create(
        <SettingsProvider>
          <TestComponent />
        </SettingsProvider>,
      );
      const instance = component.root;

      expect(instance.findByProps({id: 'currency'}).children).toEqual(['eur']);
      expect(instance.findByProps({id: 'locale'}).children).toEqual(['en']);
    });
  });

  describe('useSettings', () => {
    const wrapper = ({children}) => (
      <SettingsProvider>{children}</SettingsProvider>
    );

    it('should expose settings and setter functions', () => {
      const {result} = renderHook(() => useSettings(), {wrapper});

      expect(result.current.currency).toBe('eur');
      act(() => result.current.setCurrency('usd'));
      expect(result.current.currency).toBe('usd');

      expect(result.current.locale).toBe('en');
      act(() => result.current.setLocale('de'));
      expect(result.current.locale).toBe('de');
    });

    it('should throw when used outside of settings context', () => {
      const {result} = renderHook(() => useSettings());

      expect(result.error.message).toBe(
        'useSettings must be used within a SettingsProvider',
      );
    });
  });
});
