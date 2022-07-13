import React from 'react';
import {View, Pressable} from 'react-native';
import {Avatar, Text} from '@ui-kitten/components';
import styles from './styles';

export default function MarketsListItem({item, onPress}) {
  return (
    <Pressable onPress={() => onPress(item)}>
      <View style={styles.card}>
        <View style={styles.coin}>
          <Avatar
            style={styles.logo}
            size={'tiny'}
            source={{uri: item.image}}
          />
          <Text style={styles.symbol} category={'c2'} appearance={'hint'}>
            {item.symbol}
          </Text>
        </View>
        <View style={styles.content}>
          <Text category={'p1'}>{item.name}</Text>
        </View>
        <Text style={styles.price} category={'label'}>
          {item.current_price}
        </Text>
        <Text style={styles.price} category={'label'}>
          {item.high_24h}
        </Text>
        <Text style={styles.price} category={'label'}>
          {item.low_24h}
        </Text>
      </View>
    </Pressable>
  );
}
