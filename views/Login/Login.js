import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { COLORS, SHADOWS, SIZES, IMAGES, FONT } from '../../constants';
import { Logo } from '../../components';
import { TextInput } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Logo flex={1} />
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Hey, Hello</Text>
        <Text style={styles.text}>Enter the information you entered while registering</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  textContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    alignItems: 'center',
    gap: 10,
    justifyContent: "center"

  },
  textHeading: {
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    textAlign: "left"
  },
  text: {
    fontSize: SIZES.medium,
    textAlign: "left",
    color: COLORS.primary,
    lineHeight: 24,
  },
  inputContainer: {
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    color: COLORS.primary,
    fontSize: SIZES.medium,

  },
  loginButton: {
    Height: 40,
    width: '80%',
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },

  loginButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
});
