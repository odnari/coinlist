import React, {useCallback, useEffect, useState} from 'react';
import {Layout} from '@ui-kitten/components';
import DetailsRow from './components/DetailsRow';
import DetailsHeader from './components/DetailsHeader';
import {fetchCoin} from '../../../services/api';
import {Alert, Linking, ScrollView} from 'react-native';
import TextWithLinks from '../../../components/TextWithLinks';

export default function Details({route: {params}}) {
  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetchCoin(params.id)
      .then(data => setCoin(data))
      .catch(err => Alert.alert(err));
  }, [params.id]);

  const onLinkPress = useCallback(value => {
    Linking.openURL(value).catch(() => Alert.alert("Couldn't open URL"));
  }, []);

  return (
    <Layout>
      <ScrollView>
        <DetailsHeader image={coin.image?.large} />
        <DetailsRow label="Symbol" value={coin.symbol} />
        <DetailsRow label="Hashing algorithm" value={coin.hashing_algorithm} />
        <DetailsRow
          label="Market cap"
          value={coin.market_data?.market_cap?.eur}
        />
        <DetailsRow label="Genesis Date" value={coin.genesis_date} />
        <DetailsRow
          label="Homepage"
          value={coin.links?.homepage[0]}
          onPress={onLinkPress}
        />
        <DetailsRow
          label="Description"
          value={<TextWithLinks>{coin.description?.en}</TextWithLinks>}
          vertical
        />
      </ScrollView>
    </Layout>
  );
}
