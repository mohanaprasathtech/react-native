import React from 'react';

import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import User from './components/User';

function App() {
  return (
    <View style={styles.container}>
      <User />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#344761',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
});

export default App;
