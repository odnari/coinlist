import React from 'react';
import {Alert, Linking} from 'react-native';
import HyperlinkedText from 'react-native-hyperlinked-text';

const hrefRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/i;
const linkContentRegex = /<a[^>]*>([^<]+)<\/a>/gi;

export default function TextWithLinks({children}) {
  if (!children) {
    return null;
  }

  return (
    <HyperlinkedText
      linkDefs={[
        {
          style: {color: 'blue'},
          regex: linkContentRegex,
          replaceText: (origin, linkText) => linkText,
          onPress: origin => {
            const matches = hrefRegex.exec(origin);
            if (matches.length === 3) {
              Linking.openURL(matches[2]).catch(() =>
                Alert.alert("Couldn't open URL"),
              );
            }
          },
        },
      ]}>
      {children}
    </HyperlinkedText>
  );
}
