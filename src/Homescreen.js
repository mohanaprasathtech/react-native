import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Realm from 'realm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
let realm;
function Homescreen({navigation}) {
  realm = new Realm({
    path: 'UserDatabase.realm',
    schema: [
      {
        name: 'user_details',
        properties: {
          user_id: {type: 'int', default: 0},
          user_name: 'string',
          user_contact: 'string',
          user_address: 'string',
        },
      },
    ],
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('View')}>
        <Text>View</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
export default Homescreen;
