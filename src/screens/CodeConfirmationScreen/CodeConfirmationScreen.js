import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const backSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onResendPressed = () => {
    // navigation.navigate('SignIn');
  };

  let onContinuePressed = data => {
    navigation.navigate('NewPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Code</Text>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
          We have sent your code to your e-mail!
        </Text>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
          Please check your mail-box.
        </Text>
        <CustomInput
          placeholder="Enter the code here"
          control={control}
          name="code"
          //rules={{required: 'The code is required'}}
        />

        <CustomButton
          text="Continue"
          onPress={handleSubmit(onContinuePressed)}
        />

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

export default ForgotPasswordScreen;
