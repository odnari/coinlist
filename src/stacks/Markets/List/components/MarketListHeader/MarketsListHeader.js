import React from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import styles from './styles';

export default function MarketsListHeader() {
  return (
    <View style={styles.card}>
      <View style={styles.coin}>
        <Text category={'label'}>COIN</Text>
      </View>
      <View style={styles.content}>
        <Text category={'label'}>NAME</Text>
      </View>
      <Text style={styles.price} category={'label'}>
        PRICE
      </Text>
      <Text style={styles.price} category={'label'}>
        HIGH 24H
      </Text>
      <Text style={styles.price} category={'label'}>
        LOW 24H
      </Text>
    </View>
  );
}
