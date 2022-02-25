import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Realm from 'realm';
let realm;

function Register({navigation}) {
  realm = new Realm({path: 'UserDatabase.realm'});
  const [name, setname] = useState('');
  const [mobile, setmobile] = useState('');
  const [address, setaddress] = useState('');
  function userdata() {
    if (name && mobile && address) {
      realm.write(() => {
        var ID =
          realm.objects('user_details').sorted('user_id', true).length > 0
            ? realm.objects('user_details').sorted('user_id', true)[0].user_id +
              1
            : 1;
        realm.create('user_details', {
          user_id: ID,
          user_name: name,
          user_contact: mobile,
          user_address: address,
        });
        Alert.alert(
          'You are registered successfully',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Home'),
            },
          ],
          {cancelable: false},
        );
      });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Fill the details</Text>
      <TextInput
        style={styles.input}
        placeholder="enter name"
        value={name}
        onChange={names => setname(names)}
      />
      <TextInput
        style={styles.input}
        placeholder="enter mobile number"
        keyboardType="numeric"
        value={mobile}
        onChange={number => setmobile(number)}
      />
      <TextInput
        style={styles.input}
        placeholder="enter address"
        value={address}
        onChange={addres => setaddress(addres)}
      />
      <TouchableOpacity onPress={userdata}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  font: {
    fontSize: 15,
    fontWeight: '500',
    color: 'red',
  },
  input: {
    width: '100%',
    height: '50px',
    padding: 3,
  },
  container: {
    marginTop: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Register;
