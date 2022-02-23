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
  
  return (
    <View style={styles.user}>
      <Text style={styles.header}>User</Text>
      {/* React-Hook-Form */}
      <Controller
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
      {errors.lastName && <Text>This is required.</Text>}
      {/* React-Hook-Form */}
      
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
      {/* React-Hook-Form */}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
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
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {/* React-Hook-Form */}
      
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
