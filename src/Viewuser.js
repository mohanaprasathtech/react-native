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
function Viewuser({navigation}) {
  realm = new Realm({path: 'UserDatabase.realm'});
  const [id, setid] = useState(0);
  const [userdata, setuserdata] = useState('');
  function searchdata() {
    var user_details = realm.objects('user_details').filtered('user_id =' + id);
    if (user_details.length > 0) {
      setuserdata[0];
    } else {
      Alert.alert('No user found');
    }
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="enter id"
        value={id}
        onChange={val => setid(val)}
      />
      <TouchableOpacity onPress={searchdata}>
        <Text>Search</Text>
      </TouchableOpacity>
      <View style={{marginLeft: 35, marginTop: 10}}>
        <Text>User Id: {}</Text>
        <Text>User Name: {}</Text>
        <Text>User Contact: {}</Text>
        <Text>User Address: {}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '50px',
    padding: 3,
  },
});
export default Viewuser;
