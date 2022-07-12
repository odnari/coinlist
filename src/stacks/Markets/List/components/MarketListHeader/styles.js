import {StyleSheet} from 'react-native';
import {columnsSizes} from '../columnsConfig';

const styles = StyleSheet.create({
  coin: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: columnsSizes.coin,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  content: {
    flexBasis: columnsSizes.content,
  },
  price: {
    flexBasis: columnsSizes.price,
  },
});

export default styles;
