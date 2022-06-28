import {View, Text, StyleSheet, ScrollView} from 'react-native';
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

  // const [mail, setMail] = useState('');

  const backSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onResendPressed = () => {
    // navigation.navigate('SignIn');
  };

  let onSendPressed = data => {
    navigation.navigate('NewPassword');

    /*
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
    */
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Activate Your Account</Text>
        <CustomInput
          placeholder="Enter your mail here"
          control={control}
          name="mail"
          rules={{required: 'The e-mail is required'}}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign In"
          onPress={backSignIn}
          type="TERTIARY"
        />

        <CustomButton
          text="Resend Code"
          onPress={handleSubmit(onResendPressed)}
          type="SECONDARY"
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
});

export default ActivateAccountScreen;
