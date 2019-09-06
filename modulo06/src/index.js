import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.green,
  },
});

console.tron.log('Hello World');

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Welcome to React Native</Text>
      <Text style={styles.sectionTitle}>Welcome to React Native</Text>
      <Text style={styles.sectionTitle}>Welcome to React Native</Text>
      <Text style={styles.sectionTitle}>Welcome to React Native</Text>
      <Text style={styles.sectionTitle}>Welcome to React Native</Text>
    </View>
  );
};

export default App;
