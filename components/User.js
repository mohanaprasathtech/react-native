import {validate} from 'jest-validate';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, Button, View, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

function User() {
  function handlesubmit() {
    if (mailcheck && pwcheck) {
      Alert.alert('Success');
    } else {
      Alert.alert('Incorrect mailId & Password');
    }
  }
  const [radio, setradio] = useState([
    {label: 'male', value: 0},
    {label: 'female', value: 1},
  ]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mailcheck, setmailcheck] = useState(false);
  const [pwcheck, setpwcheck] = useState(false);
  function validate(text) {
    var validator = require('email-validator');
    validator.validate(text);
    if (validator) {
      setemail(text);
      setmailcheck(true);
      console.log('valid');
    } else {
      setemail(text);
      console.log('invalid');
    }
  }
  function passwordvalidate(pw) {
    var passwordValidator = require('password-validator');
    var schema = new passwordValidator();
    schema.is().min(8);
    console.log(schema.validate(pw));
    if (schema.validate(pw)) {
      setpwcheck(true);
    }
  }
  return (
    <View style={styles.user}>
      <Text style={styles.header}>User</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#fff"
        underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#fff"
        underlineColorAndroid={'transparent'}
      />
      <View style={{display: 'flex'}}>
        <RadioForm
          radio_props={radio}
          initial={0}
          formHorizontal={true}
          animation={true}
          onPress={value => {}}
        />
        <View style={styles.date}>
          <Button title="DOB" onPress={() => setOpen(true)} />
        </View>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        format="DD-MM-YYYY"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          console.log(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        underlineColorAndroid={'transparent'}
        value={email}
        onBlur={text => validate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onBlur={pw => passwordvalidate(pw)}
        placeholderTextColor="#fff"
        underlineColorAndroid={'transparent'}
      />

      <Button title="Submit" onPress={() => handlesubmit()} />
    </View>
  );
}
const styles = StyleSheet.create({
  date: {
    width: 100,
    height: 50,
    alignItems: 'center',
    marginLeft: 190,
    marginTop: -25,
  },
  user: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    width: 60,
    color: 'white',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#8AFF8A',
    borderBottomWidth: 3,
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});
export default User;
