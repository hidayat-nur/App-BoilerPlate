import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lists: {
    rowGap: 15,
  },
  list: {
    backgroundColor: Colors.primary400,
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
  },
  leftPlay: {
    backgroundColor: Colors.primary100,
  },
  left: {
    width: '20%',
    backgroundColor: Colors.primary300,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  label: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 16,
    color: Colors.white,
  },
  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  trackIcon: {
    width: 24,
    height: 24,
  },
  btn: {
    padding: 10,
    right: -10,
  },
  download: {
    width: 24,
    height: 24,
  },
  labelEmpty: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 16,
    color: Colors.white,
  },
});
