import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  label: {
    height: 40,
    borderRadius: 7,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  labelActive: {
    backgroundColor: '#344D71',
  },
  tabLabel: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 18,
    color: Colors.white,
  },
  indicatorStyle: {
    backgroundColor: Colors.primary500,
  },
  tabbarStyle: {
    backgroundColor: Colors.primary500,
    elevation: 0,
  },
  tabStyle: {
    width: 'auto',
  },
  loadingBox: {
    opacity: 0.85,
    backgroundColor: Colors.primary500,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentage: {
    fontFamily: Fonts.Poppins[500],
    fontSize: 36,
    color: Colors.white,
    textAlign: 'center',
  },
  percentageLabel: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
  boxPercentage: {},
  modal: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: Colors.primary500,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 10,
    width: '80%',
    paddingVertical: 33,
    paddingHorizontal: 20,
  },
  modalLabel: {
    fontFamily: Fonts.Poppins[400],
    fontSize: 16,
    color: Colors.white,
  },
  modalBtn: {
    borderRadius: 5,
    backgroundColor: Colors.primary400,
    marginTop: 15,
    paddingVertical: 3,
    paddingHorizontal: 40,
    alignSelf: 'center',
  },
});
