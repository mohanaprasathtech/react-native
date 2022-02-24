import {validate} from 'jest-validate';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, Button, View, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {useForm, Controller} from 'react-hook-form';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
function User() {
  // React-Hook-Form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      mail: '',
      passwords: '',
    },
  });
  const onSubmit = data => console.log(data);
  //React-Hook-Form
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
  var emailInput = null;
  return (
    <View style={styles.user}>
      <Text style={styles.header}>User</Text>
      {/* Formik */}
      <Formik
        initialValues={{fname: '', lname: '', email: '', passwords: ''}}
        validationSchema={Yup.object({
          fname: Yup.string().required('Required'),
          lname: Yup.string().required('Required'),
          email: Yup.string().email('Invalid Email').required('Required'),
          passwords: Yup.string().required('Required'),
        })}
        onSubmit={(values, formikActions) => {
          setTimeout(() => {
            Alert.alert(JSON.stringify(values));
            formikActions.setSubmitting(false);
          }, 500);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange('fname')}
              onBlur={handleBlur('fname')}
              value={values.fname}
              autoFocus
              placeholder="Your first Name"
              style={styles.input}
              onSubmitEditing={() => {
                emailInput.focus();
              }}
            />
            {touched.fname && errors.fname ? (
              <Text style={styles.error}>{errors.fname}</Text>
            ) : null}
            <TextInput
              onChangeText={handleChange('lname')}
              onBlur={handleBlur('lname')}
              value={values.lname}
              autoFocus
              placeholder="Your last Name"
              style={styles.input}
              onSubmitEditing={() => {
                emailInput.focus();
              }}
            />
            {touched.lname && errors.lname ? (
              <Text style={styles.error}>{errors.lname}</Text>
            ) : null}
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email Address"
              style={styles.input}
              ref={el => (emailInput = el)}
            />
            {touched.email && errors.email ? (
              <Text style={styles.error}>{errors.email}</Text>
            ) : null}
            <TextInput
              onChangeText={handleChange('passwords')}
              onBlur={handleBlur('passwords')}
              value={values.passwords}
              autoFocus
              placeholder="password"
              style={styles.input}
              onSubmitEditing={() => {
                emailInput.focus();
              }}
            />
            {touched.passwords && errors.passwords ? (
              <Text style={styles.error}>{errors.passwords}</Text>
            ) : null}
            <Button
              onPress={handleSubmit}
              color="black"
              mode="contained"
              loading={isSubmitting}
              disabled={isSubmitting}
              style={{marginTop: 16}}
              title="submit"
            />
          </View>
        )}
      </Formik>
      {/* React-Hook-Form */}
      {/* <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Firstname"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Lastname"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text>This is required.</Text>} */}
      {/* React-Hook-Form */}
      {/* <TextInput
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
      /> */}
      {/* <View style={{display: 'flex'}}>
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
      /> */}
      {/* React-Hook-Form */}
      {/* <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="mail"
      />
      {errors.mail && <Text>Invalid.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 20,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="password"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="passwords"
      />
      {errors.passwords && <Text>Invalid.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      {/* React-Hook-Form */}
      {/* <Button title="Submit" onPress={() => handlesubmit()} /> */}
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
