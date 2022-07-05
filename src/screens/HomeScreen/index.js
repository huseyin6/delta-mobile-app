import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from '../../../axios';

const Index = () => {
  const navigation = useNavigation();

  const onLogoutPressed = async () => {
    // console.warn('Sign in');
    try {
      const response = await axios.get('/logout');
      if (response.status == 200) {
        navigation.navigate('SignIn');
      }
    } catch (error) {}
  };

  return (
    <View style={styles.root}>
      <Text
        style={{
          fontSize: 40,
          alignSelf: 'center',
          padding: 30,
          color: '#191970',
        }}>
        Home Page
      </Text>
      <LogoutButton text="LOGOUT" onPress={onLogoutPressed} />
    </View>
  );
};

const LogoutButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 15,
  },

  container: {
    width: '100%',
    padding: 15,
    marginVertical: 400,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container_PRIMARY: {
    backgroundColor: '#2F5AC2',
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default Index;
