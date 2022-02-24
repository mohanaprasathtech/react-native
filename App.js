import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Homescreen from './Components/Homescreen';
function App() {
  return (
    <View style={styles.container}>
      <Homescreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
});

export default App;
