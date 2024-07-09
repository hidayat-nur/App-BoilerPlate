import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    rowGap: 20,
  },
  labelEmpty: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 16,
    color: Colors.white,
  },
  boxCard: {
    rowGap: 15,
  },
  labelCard: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 20,
    color: Colors.white,
  },
  imageCard: {
    width: '100%',
    aspectRatio: 2.05,
  },
});
