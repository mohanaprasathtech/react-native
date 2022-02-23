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
