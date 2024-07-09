import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './TabContent.styles';
import { DOWNLOAD_ICON, PLAY_ICON, STOP_ICON } from '../../../assets';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { db } from '../../../../config.firebase';
import SoundPlayer from 'react-native-sound-player';

const TabContent = (props: any) => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [basuri, setBasuri] = useState<any>([]);
  const _onFinishedPlayingSubscription = useRef<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsloading(true);
        const q = query(
          collection(db, 'category', props.categoryDocId, 'basuri'),
          orderBy('updatedAt', 'desc'),
        );
        const querySnapshot = await getDocs(q);
        const _basuri = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          isPlay: false,
          docId: doc.id,
        }));
        setBasuri(_basuri);
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

  const changePlayStatus = (_docId: string) => {
    const _new = basuri.map((ie: any) => {
      ie.isPlay = ie.docId === _docId ? !ie.isPlay : false;
      return ie;
    });
    setBasuri(_new);
  };

  const playSound = (_sound: string, _docId: string) => {
    try {
      SoundPlayer.playSoundFile('tone', 'mp3');
      SoundPlayer.playUrl(_sound);
      changePlayStatus(_docId);
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  const stopSound = () => {
    try {
      SoundPlayer.stop();
      const _new = basuri.map((ie: any) => {
        ie.isPlay = false;
        return ie;
      });
      setBasuri(_new);
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  useEffect(() => {
    _onFinishedPlayingSubscription.current = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({}) => {
        const _new = basuri.map((ie: any) => {
          ie.isPlay = false;
          return ie;
        });
        setBasuri(_new);
      },
    );
  }, [basuri]);

  useEffect(() => {
    return () => {
      const _isPlaying = basuri.some((ie: any) => ie.isPlay);
      if (_isPlaying) {
        SoundPlayer.stop();
      }
      _onFinishedPlayingSubscription.current.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.lists}
        data={basuri}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.list]}>
            <TouchableOpacity
              onPress={() =>
                item.isPlay ? stopSound() : playSound(item.file, item.docId)
              }
              style={[styles.left, item.isPlay && styles.leftPlay]}
              activeOpacity={0.75}>
              {item.isPlay ? (
                <Image source={STOP_ICON} style={styles.trackIcon} />
              ) : (
                <Image source={PLAY_ICON} style={styles.trackIcon} />
              )}
            </TouchableOpacity>
            <View style={styles.right}>
              <Text style={styles.label}>{item.label}</Text>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Download', 'Download success', [
                    { text: 'OK', onPress: () => {} },
                  ]);
                }}
                style={styles.btn}>
                <Image source={DOWNLOAD_ICON} style={styles.download} />
              </TouchableOpacity>
            </View>
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

export default TabContent;
