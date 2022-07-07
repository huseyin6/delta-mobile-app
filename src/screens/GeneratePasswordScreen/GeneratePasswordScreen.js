import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import axios from '../../../axios';

const GeneratePasswordScreen = ({route}) => {
  const token = route.params.token;

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // const [code, setCode] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  /*
        <CustomInput
          placeholder="Enter your confirmation code"
          control={control}
          name="code"
          rules={{required: 'The code is required'}}
        />
  */

  const backSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onSubmitPressed = async data => {
    try {
      const response = await axios.post(
        '/activate_account/confirm?token=' + token,
        {
          ...data,
        },
      );

      if (response.status === 200) {
        navigation.navigate('SignIn');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Oops', error.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Generate Your Password</Text>

        <CustomInput
          placeholder="Password"
          control={control}
          name="password"
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 characters long',
            },
          }}
        />

        <CustomInput
          placeholder="Repeat password"
          control={control}
          secureTextEntry={true}
          name="passwordAgain"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 characters long',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign In"
          onPress={backSignIn}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
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

  /*
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
  */
});

export default GeneratePasswordScreen;
