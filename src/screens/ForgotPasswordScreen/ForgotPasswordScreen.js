import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import axios from '../../../axios';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // const [mail, setMail] = useState('');

  const backSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onSendPressed = async data => {
    try {
      const response = await axios.post('/forgot_password', {
        ...data,
      });

      if (response.status === 200) {
        //const token = response.data;
        // console.log(token);
        // navigation.navigate('ResetPassword', {token});
        navigation.navigate('ConfirmScreen');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Oops', error.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
          We will send you confirmation link to your E-Mail...
        </Text>
        <CustomInput
          placeholder="Enter your mail here"
          control={control}
          name="email"
          rules={{required: 'The e-mail is required'}}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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
});

export default ForgotPasswordScreen;
