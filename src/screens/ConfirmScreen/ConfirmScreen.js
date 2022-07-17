import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import mark from '../../../assets/images/check_mark-modified.png';

const ConfirmScreen = () => {
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const backSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={mark}
          style={[styles.logo, {height: height * 0.25}]}
          resizeMode="contain"
        />

        <Text style={{fontWeight: 'bold', color: '#191970', fontSize: 30}}>
          We have sent an e-mail!
        </Text>
        <Text style={{fontWeight: 'bold', color: '#191970', fontSize: 29}}>
          Please check your mail-box.
        </Text>

        <Text>{'\n'}</Text>

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
  logo: {
    width: '80%',
    maxWidth: 350,
    maxHeight: 350,
  },
});

export default ConfirmScreen;
