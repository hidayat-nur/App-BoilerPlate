import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import { Header } from '../../components/Header/Header';
import { styles } from './Help.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../../config.firebase';

interface IHelp {
  navigation: any;
}

const Help = ({ navigation }: IHelp) => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [help, setHelp] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsloading(true);
        const querySnapshot = await getDocs(collection(db, 'help'));
        const _help = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            docId: doc.id,
          };
        });
        setHelp(_help);
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        Alert.alert('Error', 'Get Data Error', [
          { text: 'OK', onPress: () => {} },
        ]);
      }
    };

    getData();
  }, []);

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

      <FlatList
        contentContainerStyle={styles.list}
        data={help}
        renderItem={({ item: { label, imageUrl } }) => (
          <View style={styles.boxCard}>
            <Text style={styles.labelCard}>{label}</Text>
            <Image source={{ uri: imageUrl }} style={styles.imageCard} />
          </View>
        )}
        ListEmptyComponent={
          <View>
            {isLoading ? (
              <ActivityIndicator color={Colors.white} size="large" />
            ) : (
              <Text style={styles.labelEmpty}>EmptyData</Text>
            )}
          </View>
        }
      />
    </View>
  );
};

export default Help;
