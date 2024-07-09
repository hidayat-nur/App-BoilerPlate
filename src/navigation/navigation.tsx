import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home.screen';
import Help from '../screens/Help/Help.Screen';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { styles } from './navigation.styles';
import { Colors } from '../assets';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary500} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Home}
            />
            <Stack.Screen
              name="Help"
              options={{ headerShown: false }}
              component={Help}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default MainNavigation;
