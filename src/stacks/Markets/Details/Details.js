import React, {useCallback} from 'react';
import {Alert, Linking, RefreshControl, ScrollView} from 'react-native';
import {Layout} from '@ui-kitten/components';
import DetailsRow from './components/DetailsRow';
import DetailsHeader from './components/DetailsHeader';
import TextWithLinks from '../../../components/TextWithLinks';
import {loadingStates} from '../../../constants';
import {useSettings} from '../../../context/settings';
import useCoin from './hooks/useCoin';
import styles from './styles';

export default function Details({route: {params}}) {
  const {locale, currency} = useSettings();
  const {state, refresh, data} = useCoin(params.id, {locale, currency});

  const onLinkPress = useCallback(value => {
    Linking.openURL(value).catch(() => Alert.alert("Couldn't open URL"));
  }, []);

  return (
    <Layout>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={state === loadingStates.LOADING}
            onRefresh={refresh}
          />
        }>
        <DetailsHeader image={data.image} />
        <DetailsRow
          valueStyle={styles.uppercase}
          label="Symbol"
          value={data.symbol}
        />
        <DetailsRow label="Hashing algorithm" value={data.hashing} />
        <DetailsRow label="Market cap" value={data.marketCap} />
        <DetailsRow label="Genesis Date" value={data.genesisDate} />
        <DetailsRow
          label="Homepage"
          value={data.homepage}
          onPress={onLinkPress}
        />
        <DetailsRow
          label="Description"
          value={<TextWithLinks>{data.description}</TextWithLinks>}
          vertical
        />
      </ScrollView>
    </Layout>
  );
}
