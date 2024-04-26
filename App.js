import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import PageOne from './screens/PageOne';

export default function App() {
  return (
    <View style={styles.container}>
      <PageOne />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
