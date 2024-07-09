/**
 * @format
 */

import { AppRegistry, NativeModules } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// if (__DEV__) {
// NativeModules.DevSettings.setIsDebuggingRemotely(true);
// }

// XMLHttpRequest = global.originalXMLHttpRequest
//   ? global.originalXMLHttpRequest
//   : global.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
