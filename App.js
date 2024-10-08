import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
