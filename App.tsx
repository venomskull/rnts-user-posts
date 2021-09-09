import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNav from './src/navigation/mainNavigation';

export default function App() {
  return (
    <MainNav />
    // <View style={styles.container}>
    //   <Text>Sample</Text>
    //   <MainNav />
    // </View>
    
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
