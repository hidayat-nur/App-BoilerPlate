import React from 'react';
import { View } from 'react-native';
import styles from './Home.style';
import { Header } from '../../components/Header/Header';
import { Colors } from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';

interface IHome {
  navigation: any;
}

const Home = ({ navigation }: IHome) => {
  return (
    <View style={styles.container}>
      <Header
        title="Basuri Bussid"
        rightButton={{
          child: (
            <Icon name={'help-circle-outline'} size={24} color={Colors.white} />
          ),
          onPress: () => {
            navigation.navigate('Help');
          },
        }}
      />
    </View>
  );
};

export default Home;
