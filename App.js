/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import codePush from 'react-native-code-push';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

// import SignInScreen from './src/screens/SignInScreen';
import Navigaton from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigaton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroudColor: '#F9FBFC',
  },
});

export default codePush(App);
