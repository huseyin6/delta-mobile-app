import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Users from '../../../Users/users';
import {useState} from 'react';

const ActivateAccountScreen = () => {
  const navigation = useNavigation();

  let users = Users();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  let onActivatePressed = data => {
    if (data.password == data.password_repeat) {
      for (let index = 0; index < users.length; index++) {
        let element = users[index];
        if (data.mail == element.mail) {
          //const [users[index].is_active, setActive] = useState(1);
          navigation.navigate('SignIn');
          break;
        } else {
          console.warn('Could not activated!');
        }
      }
    } else {
      console.warn('Passwords do not match!');
    }
  };

  const backSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Activate Your Account</Text>
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

      <CustomButton text="Confirm" onPress={handleSubmit(onActivatePressed)} />

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

export default ActivateAccountScreen;
