import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';

export default function List({navigation}) {
  const onDetailsPress = () => {
    navigation && navigation.navigate('MarketsDetails');
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h2">List screen</Text>
      <Button onPress={onDetailsPress} appearance="ghost">
        Go to Details
      </Button>
    </Layout>
  );
}
