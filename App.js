import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Homescreen from './src/Homescreen';
import Register from './src/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native';
import Viewuser from './src/Viewuser';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: true}}
          name="Home"
          component={Homescreen}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="View"
          component={Viewuser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
export default App;
