import React, {useContext, useEffect} from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {MarketsContext} from '../../../context/markets';

export default function List({navigation}) {
  const {items, fetch} = useContext(MarketsContext);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const onDetailsPress = () => {
    navigation && navigation.navigate('MarketsDetails');
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h2">List screen. Loaded: {items.length}</Text>
      <Button onPress={onDetailsPress} appearance="ghost">
        Go to Details
      </Button>
    </Layout>
  );
}
