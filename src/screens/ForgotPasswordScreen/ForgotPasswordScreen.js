import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Users from '../../../Users/users';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  let users = Users();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const backSignIn = () => {
    navigation.navigate('SignIn');
  };

  let onConfirmPressed = data => {
    if (data.password == data.password_repeat) {
      for (let index = 0; index < users.length; index++) {
        let element = users[index];
        if (data.mail == element.mail) {
          users[index].password = data.password;
          navigation.navigate('SignIn', {users});
          break;
        } else {
          console.warn('Incorrect E-Mail or Password');
        }
      }
    } else {
      console.warn('Passwords do not match!');
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
      <CustomInput
        placeholder="E-Mail"
        control={control}
        name="mail"
        rules={{required: 'E-Mail is required'}}
      />

      <CustomInput
        placeholder="Password"
        control={control}
        name="password"
        secureTextEntry={true}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 3,
            message: 'Password should be minimum 3 characters long',
          },
        }}
      />

      <CustomInput
        placeholder="Repeat Password"
        control={control}
        name="password_repeat"
        secureTextEntry={true}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 3,
            message: 'Password should be minimum 3 characters long',
          },
        }}
      />

      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

      <CustomButton
        text="Back to Sign In"
        onPress={backSignIn}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});

export default ForgotPasswordScreen;
