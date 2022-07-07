import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import axios from '../../../axios';

function SignInScreen() {
  // const {mail, setMail} = useState('');
  // const {password, setPassword} = useState('');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSignInPressed = async info => {
    //  console.log(data);
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      // const response = await axios.get('/hello');
      // const response = await axios.get(); ====> RETURNS HELLO MESSAGE
      // const response = await axios.get('/users');

      // const response = await axios.get('/logout');

      const response = await axios.post('/login', {
        ...info,
      });

      // console.log(response.data);

      if (response.status === 200) {
        // console.log(response.data);
        // const {user} = response.data;
        // const role = user.role;
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Oops', error.message);
    }
    setLoading(false);
    /*
    if (data.mail == users[0].mail && data.password == users[0].password) {
      navigation.navigate('Home');
    } else {
      console.warn('FAILED');
    }*/
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onActiveAccountPressed = () => {
    navigation.navigate('ActivateAccount');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.25}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="E-Mail"
        control={control}
        name="email"
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

      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
      <CustomButton
        text="Forgotten Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
        ────────────── or ──────────────{'\n'}
      </Text>

      <CustomButton
        text="Active My Account"
        onPress={onActiveAccountPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 15,
  },

  logo: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
  },
});

export default SignInScreen;
