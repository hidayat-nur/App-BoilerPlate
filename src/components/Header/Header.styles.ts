import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  middleContainer: {
    alignContent: 'center',
  },
  title: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
});
