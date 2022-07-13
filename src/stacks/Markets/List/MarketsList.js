import React, {useCallback, useContext, useEffect} from 'react';
import {Divider, Layout, List} from '@ui-kitten/components';
import {MarketsContext} from '../../../context/markets';
import {SettingsContext} from '../../../context/settings';
import MarketsListItem from './components/MarketListItem';
import MarketsListHeader from './components/MarketListHeader';
import styles from './styles';

export default function MarketsList({navigation}) {
  const {items, fetch} = useContext(MarketsContext);
  const {currency} = useContext(SettingsContext);

  const onPress = useCallback(
    item =>
      navigation.navigate('MarketsDetails', {
        id: item.id,
        name: item.name,
      }),
    [navigation],
  );

  useEffect(() => {
    fetch({vs_currency: currency});
  }, [currency, fetch]);

  return (
    <Layout style={styles.list}>
      <List
        ItemSeparatorComponent={Divider}
        renderItem={props => <MarketsListItem onPress={onPress} {...props} />}
        data={items}
        ListHeaderComponent={MarketsListHeader}
      />
    </Layout>
  );
}
