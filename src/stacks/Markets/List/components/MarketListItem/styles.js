import {StyleSheet} from 'react-native';
import {columnsSizes} from '../columnsConfig';

const styles = StyleSheet.create({
  coin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    flexBasis: columnsSizes.coin,
  },
  symbol: {
    textTransform: 'uppercase',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 8,
  },
  content: {
    flexBasis: columnsSizes.content,
    paddingRight: 4,
  },
  price: {
    flexBasis: columnsSizes.price,
  },
});

export default styles;
