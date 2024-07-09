import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import styles from './Home.style';
import { Header } from '../../components/Header/Header';
import { Colors } from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TabContent from './_parts/TabContent.screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../../config.firebase';

interface IHome {
  navigation: any;
}

const Home = ({ navigation }: IHome) => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const [downlodPercentage, setDownloadPercentage] = useState<number>(0);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const layout = useWindowDimensions();
  const detailDownloadRef = useRef<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([]);
  const routesRef = useRef<any>([]);

  const onToggleModal = () => {
    setSuccessModal(!successModal);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, 'category'));
        const _categories = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            docId: doc.id,
          };
        });
        const _categoriesX = _categories.map((e: any) => ({
          key: e.label,
          title: e.label,
        }));
        setRoutes(_categoriesX);
        routesRef.current = _categories;
        setIsLoading(false);
      } catch (error) {
        // CreateLog('Home.Screen', error?.message);
        setIsLoading(false);
        Alert.alert('Error', 'Get Data Error', [
          { text: 'OK', onPress: () => {} },
        ]);
      }
    };

    getData();
  }, []);

  const renderScene = () => {
    return SceneMap(
      routesRef.current.reduce(
        (acc: any, curr: any) => ({
          ...acc,
          [curr.label]: () => <TabContent categoryDocId={curr.docId} />,
        }),
        {},
      ),
    );
  };

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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene()}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props => (
            <TabBar
              {...props}
              pressColor="transparent"
              activeColor={Colors.white}
              inactiveColor={Colors.white}
              indicatorStyle={styles.indicatorStyle}
              renderLabel={s => {
                return (
                  <View style={[styles.label, s.focused && styles.labelActive]}>
                    <Text style={styles.tabLabel}>{s.route.title}</Text>
                  </View>
                );
              }}
              scrollEnabled
              style={styles.tabbarStyle}
              tabStyle={styles.tabStyle}
            />
          )}
        />
      )}

      {downloading && (
        <View style={styles.loadingBox}>
          <AnimatedCircularProgress
            size={250}
            width={25}
            fill={downlodPercentage < 0 ? 0 : downlodPercentage}
            tintColor={Colors.green}
            backgroundColor={Colors.white}>
            {_fill => (
              <View style={styles.boxPercentage}>
                <Text style={styles.percentage}>{`${
                  downlodPercentage < 0 ? 0 : downlodPercentage
                }%`}</Text>
                <Text style={styles.percentageLabel}>Downloading</Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>
      )}

      {successModal && (
        <TouchableOpacity onPress={onToggleModal} style={styles.modal}>
          <TouchableWithoutFeedback>
            <View style={styles.modalBox}>
              <Text style={styles.modalLabel}>
                {detailDownloadRef.current.format === '.png'
                  ? `Download sukses, skin sudah tersimpan di Documents/BUSSID/Mods.
Klik ikon help di kanan atas, untuk instruksi pemasangannya`
                  : `Download sukses, mod sudah tersimpan di Documents/BUSSID/Mods.
Silahkan buka garasi di game bus simulator untuk memainkannya`}
              </Text>
              <TouchableOpacity
                onPress={onToggleModal}
                activeOpacity={0.75}
                style={styles.modalBtn}>
                <Text style={styles.modalLabel}>OK</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;
