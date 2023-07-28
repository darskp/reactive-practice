import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES, IMAGES, FONT, ICONS } from '../../constants'
import { styles } from './home.style';
import { Logo } from '../../components';

const Home = ({ navigation }) => {

  const handleSkipPress = () => {
    navigation.navigate('Login');
  };
  const handleAboutPress = () => {
    navigation.navigate('About');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>" Own Your Growth "</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={IMAGES.HOMEHEROBANNER}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleSkipPress}>
          <Text style={styles.buttonTitleStyleSkip}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.getStartedButton, styles.getStartedButtonWithArrow]} onPress={handleAboutPress}>
          <View>
            <Text style={styles.buttonTitleStyle}>Get Started</Text>
          </View>
          <View style={styles.arrowWrapper}>
            <Image
              source={ICONS.chevronRight}
              style={styles.iconRight}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
