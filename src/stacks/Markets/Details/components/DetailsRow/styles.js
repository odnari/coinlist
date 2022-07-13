import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  containerVertical: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  labelVertical: {
    marginBottom: 8,
  },
});

export default styles;
