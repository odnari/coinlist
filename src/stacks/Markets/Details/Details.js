import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Layout} from '@ui-kitten/components';
import DetailsRow from './components/DetailsRow';
import DetailsHeader from './components/DetailsHeader';
import {fetchCoin} from '../../../services/api';
import {Alert, Linking, ScrollView} from 'react-native';
import TextWithLinks from '../../../components/TextWithLinks';
import {SettingsContext} from '../../../context/settings';
import styles from './styles';

export default function Details({route: {params}}) {
  const {locale, currency} = useContext(SettingsContext);
  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetchCoin(params.id, {localization: locale})
      .then(data => setCoin(data))
      .catch(err => Alert.alert(err));
  }, [locale, params.id]);

  const onLinkPress = useCallback(value => {
    Linking.openURL(value).catch(() => Alert.alert("Couldn't open URL"));
  }, []);

  const marketCap = coin.market_data?.market_cap?.[currency];
  const marketCapFormatted = marketCap
    ? `${marketCap} ${currency.toUpperCase()}`
    : '';

  return (
    <Layout>
      <ScrollView>
        <DetailsHeader image={coin.image?.large} />
        <DetailsRow
          valueStyle={styles.uppercase}
          label="Symbol"
          value={coin.symbol}
        />
        <DetailsRow label="Hashing algorithm" value={coin.hashing_algorithm} />
        <DetailsRow label="Market cap" value={marketCapFormatted} />
        <DetailsRow label="Genesis Date" value={coin.genesis_date} />
        <DetailsRow
          label="Homepage"
          value={coin.links?.homepage[0]}
          onPress={onLinkPress}
        />
        <DetailsRow
          label="Description"
          value={<TextWithLinks>{coin.description?.[locale]}</TextWithLinks>}
          vertical
        />
      </ScrollView>
    </Layout>
  );
}
