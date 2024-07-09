import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header/Header';
import { styles } from './Help.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets';

interface IHelp {
  navigation: any;
}

const Help = ({ navigation }: IHelp) => {
  return (
    <View style={styles.container}>
      <Header
        leftButton={{
          onPress: () => {
            navigation.goBack();
          },
          child: (
            <Icon name={'arrow-back-outline'} size={24} color={Colors.white} />
          ),
        }}
        title={'Cara pakai'}
      />
    </View>
  );
};

export default Help;
