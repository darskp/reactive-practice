import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES, IMAGES, FONT } from '../../constants'
import {styles} from './about.style'
import { Logo } from '../../components';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Logo/>
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>" I am About Page "</Text>
      </View>

    </SafeAreaView>
  );
};
export default About;
