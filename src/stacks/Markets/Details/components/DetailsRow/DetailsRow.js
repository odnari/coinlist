import React from 'react';
import styles from './styles';
import {Divider, Layout, Text} from '@ui-kitten/components';
import {Pressable} from 'react-native';

export default function DetailsRow({label, value, vertical, onPress}) {
  const containerStyle = vertical
    ? styles.containerVertical
    : styles.containerHorizontal;
  const labelStyle = vertical ? styles.labelVertical : {};

  const WrapperComponent = onPress ? Pressable : React.Fragment;
  const wrapperProps = onPress ? {onPress: () => onPress?.(value)} : {};

  return (
    <WrapperComponent {...wrapperProps}>
      <Layout level="1" style={containerStyle}>
        <Text appearance="hint" category="s1" style={labelStyle}>
          {label}
        </Text>
        <Text category="s1">{value}</Text>
      </Layout>
      <Divider />
    </WrapperComponent>
  );
}
