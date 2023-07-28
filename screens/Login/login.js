import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES, IMAGES, FONT } from '../../constants'
import { styles } from './login.style';
import { Logo } from '../../components';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
       <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>" I am Login Page "</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
