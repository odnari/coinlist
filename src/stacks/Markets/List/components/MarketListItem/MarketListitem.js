import React from 'react';
import {View, Pressable} from 'react-native';
import {Avatar, Text} from '@ui-kitten/components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function MarketsListItem({item}) {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('MarketsDetails');

  return (
    <Pressable onPress={onPress}>
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
